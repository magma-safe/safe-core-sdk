'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.calculateSafeMessageHash =
  exports.calculateSafeTransactionHash =
  exports.preimageSafeMessageHash =
  exports.preimageSafeTransactionHash =
  exports.buildSignatureBytes =
  exports.buildContractSignature =
  exports.generateEIP712Signature =
  exports.generateSignature =
  exports.adjustVInSignature =
  exports.isTxHashSignedWithPrefix =
  exports.generatePreValidatedSignature =
    void 0
const ethers_1 = require('ethers')
const ethereumjs_util_1 = require('ethereumjs-util')
const satisfies_1 = __importDefault(require('semver/functions/satisfies'))
const address_1 = require('../address')
const SafeSignature_1 = require('./SafeSignature')
const eip_712_1 = require('../eip-712')
const types_1 = require('../../types')
function generatePreValidatedSignature(ownerAddress) {
  const signature =
    '0x000000000000000000000000' +
    ownerAddress.slice(2) +
    '0000000000000000000000000000000000000000000000000000000000000000' +
    '01'
  return new SafeSignature_1.EthSafeSignature(ownerAddress, signature)
}
exports.generatePreValidatedSignature = generatePreValidatedSignature
function isTxHashSignedWithPrefix(txHash, signature, ownerAddress) {
  let hasPrefix
  try {
    const rsvSig = {
      r: Buffer.from(signature.slice(2, 66), 'hex'),
      s: Buffer.from(signature.slice(66, 130), 'hex'),
      v: parseInt(signature.slice(130, 132), 16)
    }
    const recoveredData = (0, ethereumjs_util_1.ecrecover)(
      Buffer.from(txHash.slice(2), 'hex'),
      rsvSig.v,
      rsvSig.r,
      rsvSig.s
    )
    const recoveredAddress = (0, ethereumjs_util_1.bufferToHex)(
      (0, ethereumjs_util_1.pubToAddress)(recoveredData)
    )
    hasPrefix = !(0, address_1.sameString)(recoveredAddress, ownerAddress)
  } catch (e) {
    hasPrefix = true
  }
  return hasPrefix
}
exports.isTxHashSignedWithPrefix = isTxHashSignedWithPrefix
const adjustVInSignature = (signingMethod, signature, safeTxHash, signerAddress) => {
  const ETHEREUM_V_VALUES = [0, 1, 27, 28]
  const MIN_VALID_V_VALUE_FOR_SAFE_ECDSA = 27
  let signatureV = parseInt(signature.slice(-2), 16)
  if (!ETHEREUM_V_VALUES.includes(signatureV)) {
    throw new Error('Invalid signature')
  }
  if (signingMethod === types_1.SigningMethod.ETH_SIGN) {
    /*
          The Safe's expected V value for ECDSA signature is:
          - 27 or 28
          - 31 or 32 if the message was signed with a EIP-191 prefix. Should be calculated as ECDSA V value + 4
          Some wallets do that, some wallets don't, V > 30 is used by contracts to differentiate between
          prefixed and non-prefixed messages. The only way to know if the message was signed with a
          prefix is to check if the signer address is the same as the recovered address.
    
          More info:
          https://docs.safe.global/safe-core-protocol/signatures
        */
    if (signatureV < MIN_VALID_V_VALUE_FOR_SAFE_ECDSA) {
      signatureV += MIN_VALID_V_VALUE_FOR_SAFE_ECDSA
    }
    const adjustedSignature = signature.slice(0, -2) + signatureV.toString(16)
    const signatureHasPrefix = isTxHashSignedWithPrefix(
      safeTxHash,
      adjustedSignature,
      signerAddress
    )
    if (signatureHasPrefix) {
      signatureV += 4
    }
  }
  if (signingMethod === types_1.SigningMethod.ETH_SIGN_TYPED_DATA) {
    // Metamask with ledger returns V=0/1 here too, we need to adjust it to be ethereum's valid value (27 or 28)
    if (signatureV < MIN_VALID_V_VALUE_FOR_SAFE_ECDSA) {
      signatureV += MIN_VALID_V_VALUE_FOR_SAFE_ECDSA
    }
  }
  signature = signature.slice(0, -2) + signatureV.toString(16)
  return signature
}
exports.adjustVInSignature = adjustVInSignature
async function generateSignature(ethAdapter, hash) {
  const signerAddress = await ethAdapter.getSignerAddress()
  if (!signerAddress) {
    throw new Error('EthAdapter must be initialized with a signer to use this method')
  }
  let signature = await ethAdapter.signMessage(hash)
  signature = (0, exports.adjustVInSignature)(
    types_1.SigningMethod.ETH_SIGN,
    signature,
    hash,
    signerAddress
  )
  return new SafeSignature_1.EthSafeSignature(signerAddress, signature)
}
exports.generateSignature = generateSignature
async function generateEIP712Signature(ethAdapter, safeEIP712Args, methodVersion) {
  const signerAddress = await ethAdapter.getSignerAddress()
  if (!signerAddress) {
    throw new Error('EthAdapter must be initialized with a signer to use this method')
  }
  let signature = await ethAdapter.signTypedData(safeEIP712Args, methodVersion)
  signature = (0, exports.adjustVInSignature)(types_1.SigningMethod.ETH_SIGN_TYPED_DATA, signature)
  return new SafeSignature_1.EthSafeSignature(signerAddress, signature)
}
exports.generateEIP712Signature = generateEIP712Signature
const buildContractSignature = async (signatures, signerSafeAddress) => {
  const contractSignature = new SafeSignature_1.EthSafeSignature(
    signerSafeAddress,
    (0, exports.buildSignatureBytes)(signatures),
    true
  )
  return contractSignature
}
exports.buildContractSignature = buildContractSignature
const buildSignatureBytes = (signatures) => {
  const SIGNATURE_LENGTH_BYTES = 65
  signatures.sort((left, right) =>
    left.signer.toLowerCase().localeCompare(right.signer.toLowerCase())
  )
  let signatureBytes = '0x'
  let dynamicBytes = ''
  for (const signature of signatures) {
    if (signature.isContractSignature) {
      /*
              A contract signature has a static part of 65 bytes and the dynamic part that needs to be appended
              at the end of signature bytes.
              The signature format is
              Signature type == 0
              Constant part: 65 bytes
              {32-bytes signature verifier}{32-bytes dynamic data position}{1-byte signature type}
              Dynamic part (solidity bytes): 32 bytes + signature data length
              {32-bytes signature length}{bytes signature data}
            */
      const dynamicPartPosition = (
        signatures.length * SIGNATURE_LENGTH_BYTES +
        dynamicBytes.length / 2
      )
        .toString(16)
        .padStart(64, '0')
      signatureBytes += signature.staticPart(dynamicPartPosition)
      dynamicBytes += signature.dynamicPart()
    } else {
      signatureBytes += signature.data.slice(2)
    }
  }
  return signatureBytes + dynamicBytes
}
exports.buildSignatureBytes = buildSignatureBytes
const preimageSafeTransactionHash = (safeAddress, safeTx, safeVersion, chainId) => {
  const safeTxTypes = (0, eip_712_1.getEip712TxTypes)(safeVersion)
  return ethers_1.ethers.TypedDataEncoder.encode(
    { verifyingContract: safeAddress, chainId },
    { SafeTx: safeTxTypes.SafeTx },
    safeTx
  )
}
exports.preimageSafeTransactionHash = preimageSafeTransactionHash
const preimageSafeMessageHash = (safeAddress, message, safeVersion, chainId) => {
  const safeMessageTypes = (0, eip_712_1.getEip712MessageTypes)(safeVersion)
  return ethers_1.ethers.TypedDataEncoder.encode(
    { verifyingContract: safeAddress, chainId },
    { SafeMessage: safeMessageTypes.SafeMessage },
    { message }
  )
}
exports.preimageSafeMessageHash = preimageSafeMessageHash
const EQ_OR_GT_1_3_0 = '>=1.3.0'
const calculateSafeTransactionHash = (safeAddress, safeTx, safeVersion, chainId) => {
  const safeTxTypes = (0, eip_712_1.getEip712TxTypes)(safeVersion)
  const domain = { verifyingContract: safeAddress }
  if ((0, satisfies_1.default)(safeVersion, EQ_OR_GT_1_3_0)) {
    domain.chainId = chainId
  }
  return ethers_1.ethers.TypedDataEncoder.hash(domain, { SafeTx: safeTxTypes.SafeTx }, safeTx)
}
exports.calculateSafeTransactionHash = calculateSafeTransactionHash
const calculateSafeMessageHash = (safeAddress, message, safeVersion, chainId) => {
  const safeMessageTypes = (0, eip_712_1.getEip712MessageTypes)(safeVersion)
  return ethers_1.ethers.TypedDataEncoder.hash(
    { verifyingContract: safeAddress, chainId },
    { SafeMessage: safeMessageTypes.SafeMessage },
    { message }
  )
}
exports.calculateSafeMessageHash = calculateSafeMessageHash
//# sourceMappingURL=utils.js.map
