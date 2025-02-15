'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
exports.hashSafeMessage =
  exports.getEip712MessageTypes =
  exports.getEip712TxTypes =
  exports.preimageSafeMessageHash =
  exports.preimageSafeTransactionHash =
  exports.buildSignatureBytes =
  exports.buildContractSignature =
  exports.generateEIP712Signature =
  exports.generateSignature =
  exports.validateEthereumAddress =
  exports.validateEip3770Address =
  exports.standardizeSafeTransactionData =
  exports.predictSafeAddress =
  exports.isGasTokenCompatibleWithHandlePayment =
  exports.getSignMessageLibContract =
  exports.getSafeContract =
  exports.getProxyFactoryContract =
  exports.getMultiSendContract =
  exports.getMultiSendCallOnlyContract =
  exports.getERC20Decimals =
  exports.getCreateCallContract =
  exports.getCompatibilityFallbackHandlerContract =
  exports.encodeSetupCallData =
  exports.encodeMultiSendData =
  exports.encodeCreateProxyWithNonce =
  exports.Web3Adapter =
  exports.SigningMethod =
  exports.SignMessageLibWeb3Contract =
  exports.SignMessageLibEthersContract =
  exports.SafeProxyFactoryWeb3Contract =
  exports.SafeProxyFactoryEthersContract =
  exports.SafeFactory =
  exports.SafeContractWeb3 =
  exports.SafeContractEthers =
  exports.PREDETERMINED_SALT_NONCE =
  exports.MultiSendWeb3Contract =
  exports.MultiSendEthersContract =
  exports.MultiSendCallOnlyWeb3Contract =
  exports.MultiSendCallOnlyEthersContract =
  exports.EthersAdapter =
  exports.EthSafeSignature =
  exports.DEFAULT_SAFE_VERSION =
  exports.createERC20TokenTransferTransaction =
  exports.CreateCallWeb3Contract =
  exports.CreateCallEthersContract =
  exports.ContractManager =
  exports.estimateSafeDeploymentGas =
  exports.estimateSafeTxGas =
  exports.estimateTxGas =
  exports.estimateTxBaseGas =
    void 0
exports.generateTypedData = void 0
const Safe_1 = __importDefault(require('./Safe'))
const ethers_1 = require('./adapters/ethers')
Object.defineProperty(exports, 'CreateCallEthersContract', {
  enumerable: true,
  get: function () {
    return ethers_1.CreateCallEthersContract
  }
})
Object.defineProperty(exports, 'EthersAdapter', {
  enumerable: true,
  get: function () {
    return ethers_1.EthersAdapter
  }
})
Object.defineProperty(exports, 'MultiSendCallOnlyEthersContract', {
  enumerable: true,
  get: function () {
    return ethers_1.MultiSendCallOnlyEthersContract
  }
})
Object.defineProperty(exports, 'MultiSendEthersContract', {
  enumerable: true,
  get: function () {
    return ethers_1.MultiSendEthersContract
  }
})
Object.defineProperty(exports, 'SafeContractEthers', {
  enumerable: true,
  get: function () {
    return ethers_1.SafeContractEthers
  }
})
Object.defineProperty(exports, 'SafeProxyFactoryEthersContract', {
  enumerable: true,
  get: function () {
    return ethers_1.SafeProxyFactoryEthersContract
  }
})
Object.defineProperty(exports, 'SignMessageLibEthersContract', {
  enumerable: true,
  get: function () {
    return ethers_1.SignMessageLibEthersContract
  }
})
const web3_1 = require('./adapters/web3')
Object.defineProperty(exports, 'CreateCallWeb3Contract', {
  enumerable: true,
  get: function () {
    return web3_1.CreateCallWeb3Contract
  }
})
Object.defineProperty(exports, 'MultiSendCallOnlyWeb3Contract', {
  enumerable: true,
  get: function () {
    return web3_1.MultiSendCallOnlyWeb3Contract
  }
})
Object.defineProperty(exports, 'MultiSendWeb3Contract', {
  enumerable: true,
  get: function () {
    return web3_1.MultiSendWeb3Contract
  }
})
Object.defineProperty(exports, 'SafeContractWeb3', {
  enumerable: true,
  get: function () {
    return web3_1.SafeContractWeb3
  }
})
Object.defineProperty(exports, 'SafeProxyFactoryWeb3Contract', {
  enumerable: true,
  get: function () {
    return web3_1.SafeProxyFactoryWeb3Contract
  }
})
Object.defineProperty(exports, 'SignMessageLibWeb3Contract', {
  enumerable: true,
  get: function () {
    return web3_1.SignMessageLibWeb3Contract
  }
})
Object.defineProperty(exports, 'Web3Adapter', {
  enumerable: true,
  get: function () {
    return web3_1.Web3Adapter
  }
})
const config_1 = require('./contracts/config')
Object.defineProperty(exports, 'DEFAULT_SAFE_VERSION', {
  enumerable: true,
  get: function () {
    return config_1.DEFAULT_SAFE_VERSION
  }
})
const safeDeploymentContracts_1 = require('./contracts/safeDeploymentContracts')
Object.defineProperty(exports, 'getCompatibilityFallbackHandlerContract', {
  enumerable: true,
  get: function () {
    return safeDeploymentContracts_1.getCompatibilityFallbackHandlerContract
  }
})
Object.defineProperty(exports, 'getCreateCallContract', {
  enumerable: true,
  get: function () {
    return safeDeploymentContracts_1.getCreateCallContract
  }
})
Object.defineProperty(exports, 'getMultiSendCallOnlyContract', {
  enumerable: true,
  get: function () {
    return safeDeploymentContracts_1.getMultiSendCallOnlyContract
  }
})
Object.defineProperty(exports, 'getMultiSendContract', {
  enumerable: true,
  get: function () {
    return safeDeploymentContracts_1.getMultiSendContract
  }
})
Object.defineProperty(exports, 'getProxyFactoryContract', {
  enumerable: true,
  get: function () {
    return safeDeploymentContracts_1.getProxyFactoryContract
  }
})
Object.defineProperty(exports, 'getSafeContract', {
  enumerable: true,
  get: function () {
    return safeDeploymentContracts_1.getSafeContract
  }
})
Object.defineProperty(exports, 'getSignMessageLibContract', {
  enumerable: true,
  get: function () {
    return safeDeploymentContracts_1.getSignMessageLibContract
  }
})
const utils_1 = require('./contracts/utils')
Object.defineProperty(exports, 'PREDETERMINED_SALT_NONCE', {
  enumerable: true,
  get: function () {
    return utils_1.PREDETERMINED_SALT_NONCE
  }
})
Object.defineProperty(exports, 'encodeCreateProxyWithNonce', {
  enumerable: true,
  get: function () {
    return utils_1.encodeCreateProxyWithNonce
  }
})
Object.defineProperty(exports, 'encodeSetupCallData', {
  enumerable: true,
  get: function () {
    return utils_1.encodeSetupCallData
  }
})
Object.defineProperty(exports, 'predictSafeAddress', {
  enumerable: true,
  get: function () {
    return utils_1.predictSafeAddress
  }
})
const contractManager_1 = __importDefault(require('./managers/contractManager'))
exports.ContractManager = contractManager_1.default
const safeFactory_1 = __importDefault(require('./safeFactory'))
exports.SafeFactory = safeFactory_1.default
const types_1 = require('./types')
Object.defineProperty(exports, 'SigningMethod', {
  enumerable: true,
  get: function () {
    return types_1.SigningMethod
  }
})
const utils_2 = require('./utils')
Object.defineProperty(exports, 'EthSafeSignature', {
  enumerable: true,
  get: function () {
    return utils_2.EthSafeSignature
  }
})
Object.defineProperty(exports, 'estimateTxBaseGas', {
  enumerable: true,
  get: function () {
    return utils_2.estimateTxBaseGas
  }
})
Object.defineProperty(exports, 'estimateTxGas', {
  enumerable: true,
  get: function () {
    return utils_2.estimateTxGas
  }
})
Object.defineProperty(exports, 'estimateSafeTxGas', {
  enumerable: true,
  get: function () {
    return utils_2.estimateSafeTxGas
  }
})
Object.defineProperty(exports, 'estimateSafeDeploymentGas', {
  enumerable: true,
  get: function () {
    return utils_2.estimateSafeDeploymentGas
  }
})
Object.defineProperty(exports, 'validateEthereumAddress', {
  enumerable: true,
  get: function () {
    return utils_2.validateEthereumAddress
  }
})
Object.defineProperty(exports, 'validateEip3770Address', {
  enumerable: true,
  get: function () {
    return utils_2.validateEip3770Address
  }
})
const utils_3 = require('./utils/transactions/utils')
Object.defineProperty(exports, 'encodeMultiSendData', {
  enumerable: true,
  get: function () {
    return utils_3.encodeMultiSendData
  }
})
Object.defineProperty(exports, 'standardizeSafeTransactionData', {
  enumerable: true,
  get: function () {
    return utils_3.standardizeSafeTransactionData
  }
})
const erc_20_1 = require('./utils/erc-20')
Object.defineProperty(exports, 'getERC20Decimals', {
  enumerable: true,
  get: function () {
    return erc_20_1.getERC20Decimals
  }
})
Object.defineProperty(exports, 'isGasTokenCompatibleWithHandlePayment', {
  enumerable: true,
  get: function () {
    return erc_20_1.isGasTokenCompatibleWithHandlePayment
  }
})
Object.defineProperty(exports, 'createERC20TokenTransferTransaction', {
  enumerable: true,
  get: function () {
    return erc_20_1.createERC20TokenTransferTransaction
  }
})
const utils_4 = require('./utils/signatures/utils')
Object.defineProperty(exports, 'generateSignature', {
  enumerable: true,
  get: function () {
    return utils_4.generateSignature
  }
})
Object.defineProperty(exports, 'generateEIP712Signature', {
  enumerable: true,
  get: function () {
    return utils_4.generateEIP712Signature
  }
})
Object.defineProperty(exports, 'buildContractSignature', {
  enumerable: true,
  get: function () {
    return utils_4.buildContractSignature
  }
})
Object.defineProperty(exports, 'buildSignatureBytes', {
  enumerable: true,
  get: function () {
    return utils_4.buildSignatureBytes
  }
})
Object.defineProperty(exports, 'preimageSafeTransactionHash', {
  enumerable: true,
  get: function () {
    return utils_4.preimageSafeTransactionHash
  }
})
Object.defineProperty(exports, 'preimageSafeMessageHash', {
  enumerable: true,
  get: function () {
    return utils_4.preimageSafeMessageHash
  }
})
const eip_712_1 = require('./utils/eip-712')
Object.defineProperty(exports, 'getEip712TxTypes', {
  enumerable: true,
  get: function () {
    return eip_712_1.getEip712TxTypes
  }
})
Object.defineProperty(exports, 'getEip712MessageTypes', {
  enumerable: true,
  get: function () {
    return eip_712_1.getEip712MessageTypes
  }
})
Object.defineProperty(exports, 'hashSafeMessage', {
  enumerable: true,
  get: function () {
    return eip_712_1.hashSafeMessage
  }
})
Object.defineProperty(exports, 'generateTypedData', {
  enumerable: true,
  get: function () {
    return eip_712_1.generateTypedData
  }
})
exports.default = Safe_1.default
//# sourceMappingURL=index.js.map
