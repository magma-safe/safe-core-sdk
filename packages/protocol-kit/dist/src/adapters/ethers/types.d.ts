import { ContractTransactionResponse } from 'ethers'
import { BaseTransactionResult } from '@safe-global/safe-core-sdk-types'
export interface EthersTransactionOptions {
  from?: string
  gasLimit?: number | string
  gasPrice?: number | string
  maxFeePerGas?: number | string
  maxPriorityFeePerGas?: number | string
  nonce?: number
}
export interface EthersTransactionResult extends BaseTransactionResult {
  transactionResponse: ContractTransactionResponse
  options?: EthersTransactionOptions
}
