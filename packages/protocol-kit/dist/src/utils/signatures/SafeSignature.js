'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.EthSafeSignature = void 0
class EthSafeSignature {
  /**
   * Creates an instance of a Safe signature.
   *
   * @param signer - Ethers signer
   * @param signature - The Safe signature
   * @returns The Safe signature instance
   */
  constructor(signer, signature, isContractSignature = false) {
    this.signer = signer
    this.data = signature
    this.isContractSignature = isContractSignature
  }
  /**
   * Returns the static part of the Safe signature.
   *
   * @returns The static part of the Safe signature
   */
  staticPart(dynamicOffset) {
    if (this.isContractSignature) {
      return `${this.signer.slice(2).padStart(64, '0')}${dynamicOffset || ''}00`
    }
    return this.data
  }
  /**
   * Returns the dynamic part of the Safe signature.
   *
   * @returns The dynamic part of the Safe signature
   */
  dynamicPart() {
    if (this.isContractSignature) {
      const dynamicPartLength = (this.data.slice(2).length / 2).toString(16).padStart(64, '0')
      return `${dynamicPartLength}${this.data.slice(2)}`
    }
    return ''
  }
}
exports.EthSafeSignature = EthSafeSignature
//# sourceMappingURL=SafeSignature.js.map
