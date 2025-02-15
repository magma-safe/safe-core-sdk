'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.decodeSignatureData =
  exports.parseIsValidSignatureErrorResponse =
  exports.getErrorMessage =
    void 0
function isErrorWithMessage(error) {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof error.message === 'string'
  )
}
function toErrorWithMessage(maybeError) {
  if (isErrorWithMessage(maybeError)) return maybeError
  try {
    return new Error(JSON.stringify(maybeError))
  } catch {
    // fallback in case there's an error stringifying the maybeError
    // like with circular references for example.
    return new Error(String(maybeError))
  }
}
function getErrorMessage(error) {
  return toErrorWithMessage(error).message
}
exports.getErrorMessage = getErrorMessage
/**
 * Parses the isValidSignature call response from different providers.
 * It extracts and decodes the signature value from the Error object.
 *
 * @param {ProviderSignatureError} error - The error object with the signature data.
 * @returns {string} The signature value.
 * @throws It Will throw an error if the signature cannot be parsed.
 */
function parseIsValidSignatureErrorResponse(error) {
  // Ethers v6
  const ethersData = error?.data
  if (ethersData) {
    return decodeSignatureData(ethersData)
  }
  // gnosis-chain
  const gnosisChainProviderData = error?.info?.error?.data
  if (gnosisChainProviderData) {
    const isString = typeof gnosisChainProviderData === 'string'
    const encodedDataResponse = isString ? gnosisChainProviderData : gnosisChainProviderData.data
    return decodeSignatureData(encodedDataResponse)
  }
  // Error message
  const isEncodedDataPresent = error?.message?.includes('0x')
  if (isEncodedDataPresent) {
    return decodeSignatureData(error?.message)
  }
  throw new Error('Could not parse Signature from Error response, Details: ' + error?.message)
}
exports.parseIsValidSignatureErrorResponse = parseIsValidSignatureErrorResponse
function decodeSignatureData(encodedSignatureData) {
  const [, encodedSignature] = encodedSignatureData.split('0x')
  const data = '0x' + encodedSignature
  return data.slice(0, 10).toLowerCase()
}
exports.decodeSignatureData = decodeSignatureData
//# sourceMappingURL=errors.js.map
