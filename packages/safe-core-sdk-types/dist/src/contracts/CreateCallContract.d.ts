import { TransactionOptions, TransactionResult } from '../types'
export interface CreateCallContract {
  getAddress(): Promise<string>
  performCreate2(
    value: string,
    deploymentData: string,
    salt: string,
    options?: TransactionOptions
  ): Promise<TransactionResult>
  performCreate(
    value: string,
    deploymentData: string,
    options?: TransactionOptions
  ): Promise<TransactionResult>
  encode(methodName: any, params: any): string
  estimateGas(methodName: string, params: any[], options: TransactionOptions): Promise<string>
}
