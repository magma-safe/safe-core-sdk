import {
  SafeSignature,
  SafeTransaction,
  SafeTransactionData
} from '@safe-global/safe-core-sdk-types'
declare class EthSafeTransaction implements SafeTransaction {
  data: SafeTransactionData
  signatures: Map<string, SafeSignature>
  constructor(data: SafeTransactionData)
  getSignature(signer: string): SafeSignature | undefined
  addSignature(signature: SafeSignature): void
  encodedSignatures(): string
}
export default EthSafeTransaction
