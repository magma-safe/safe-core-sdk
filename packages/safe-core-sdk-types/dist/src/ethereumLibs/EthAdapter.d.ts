import { CompatibilityFallbackHandlerContract } from '../contracts/CompatibilityFallbackHandlerContract'
import { CreateCallContract } from '../contracts/CreateCallContract'
import { MultiSendCallOnlyContract } from '../contracts/MultiSendCallOnlyContract'
import { MultiSendContract } from '../contracts/MultiSendContract'
import { SafeContract } from '../contracts/SafeContract'
import { SafeProxyFactoryContract } from '../contracts/SafeProxyFactoryContract'
import { SignMessageLibContract } from '../contracts/SignMessageLibContract'
import { SimulateTxAccessorContract } from '../contracts/SimulateTxAccessorContract'
import { Eip3770Address, SafeEIP712Args, SafeVersion } from '../types'
import { SingletonDeployment } from '@safe-global/safe-deployments'
import { AbiItem } from 'web3-utils'
export interface EthAdapterTransaction {
  to: string
  from: string
  data: string
  value?: string
  gasPrice?: number | string
  gasLimit?: number | string
  maxFeePerGas?: number | string
  maxPriorityFeePerGas?: number | string
}
export interface GetContractProps {
  safeVersion: SafeVersion
  singletonDeployment?: SingletonDeployment
  customContractAddress?: string
  customContractAbi?: AbiItem | AbiItem[]
}
export interface EthAdapter {
  isAddress(address: string): boolean
  getEip3770Address(fullAddress: string): Promise<Eip3770Address>
  getBalance(address: string, defaultBlock?: string | number): Promise<bigint>
  getNonce(address: string, defaultBlock?: string | number): Promise<number>
  getChainId(): Promise<bigint>
  getChecksummedAddress(address: string): string
  getSafeContract({
    safeVersion,
    singletonDeployment,
    customContractAddress,
    customContractAbi
  }: GetContractProps): Promise<SafeContract>
  getMultiSendContract({
    safeVersion,
    singletonDeployment,
    customContractAddress,
    customContractAbi
  }: GetContractProps): Promise<MultiSendContract>
  getMultiSendCallOnlyContract({
    safeVersion,
    singletonDeployment,
    customContractAddress,
    customContractAbi
  }: GetContractProps): Promise<MultiSendCallOnlyContract>
  getCompatibilityFallbackHandlerContract({
    safeVersion,
    singletonDeployment,
    customContractAddress,
    customContractAbi
  }: GetContractProps): Promise<CompatibilityFallbackHandlerContract>
  getSafeProxyFactoryContract({
    safeVersion,
    singletonDeployment,
    customContractAddress,
    customContractAbi
  }: GetContractProps): Promise<SafeProxyFactoryContract>
  getSignMessageLibContract({
    safeVersion,
    singletonDeployment,
    customContractAddress,
    customContractAbi
  }: GetContractProps): Promise<SignMessageLibContract>
  getCreateCallContract({
    safeVersion,
    singletonDeployment,
    customContractAddress,
    customContractAbi
  }: GetContractProps): Promise<CreateCallContract>
  getSimulateTxAccessorContract({
    safeVersion,
    singletonDeployment,
    customContractAddress,
    customContractAbi
  }: GetContractProps): Promise<SimulateTxAccessorContract>
  getContractCode(address: string, defaultBlock?: string | number): Promise<string>
  isContractDeployed(address: string, defaultBlock?: string | number): Promise<boolean>
  getStorageAt(address: string, position: string): Promise<string>
  getTransaction(transactionHash: string): Promise<any>
  getSignerAddress(): Promise<string | undefined>
  signMessage(message: string): Promise<string>
  signTypedData(safeEIP712Args: SafeEIP712Args, signTypedDataVersion?: string): Promise<string>
  estimateGas(
    transaction: EthAdapterTransaction,
    callback?: (error: Error, gas: number) => void
  ): Promise<string>
  call(transaction: EthAdapterTransaction, defaultBlock?: string | number): Promise<string>
  encodeParameters(types: string[], values: any[]): string
  decodeParameters(
    types: any[],
    values: string
  ): {
    [key: string]: any
  }
}
