import { RelayResponse, TransactionStatusResponse } from '@gelatonetwork/relay-sdk'
import { RelayKitBasePack } from '../../RelayKitBasePack'
import { RelayKitTransaction } from '../../types'
import {
  MetaTransactionOptions,
  RelayTransaction,
  SafeTransaction
} from '@safe-global/safe-core-sdk-types'
import { GelatoOptions } from './types'
export declare class GelatoRelayPack extends RelayKitBasePack {
  #private
  constructor({ apiKey, protocolKit }: GelatoOptions)
  private _getFeeToken
  getFeeCollector(): string
  getEstimateFee(chainId: bigint, gasLimit: string, gasToken?: string): Promise<string>
  getTaskStatus(taskId: string): Promise<TransactionStatusResponse | undefined>
  /**
   * Creates a payment transaction to Gelato
   *
   * @private
   * @async
   * @function
   * @param {string} gas - The gas amount for the payment.
   * @param {MetaTransactionOptions} options - Options for the meta transaction.
   * @returns {Promise<Transaction>} Promise object representing the created payment transaction.
   *
   */
  private createPaymentToGelato
  /**
   * Creates a Safe transaction designed to be executed using the Gelato Relayer.
   *
   * @param {RelayKitTransaction} RelayKitTransaction - Properties required to create the transaction.
   * @returns {Promise<SafeTransaction>} Returns a Promise that resolves with a SafeTransaction object.
   */
  createRelayedTransaction({
    transactions,
    onlyCalls,
    options
  }: RelayKitTransaction): Promise<SafeTransaction>
  /**
   * Creates a Safe transaction designed to be executed using the Gelato Relayer and
   * uses the handlePayment function defined in the Safe contract to pay the fees
   * to the Gelato relayer.
   *
   * @async
   * @function createTransactionWithHandlePayment
   * @param {RelayKitTransaction} RelayKitTransaction - Properties needed to create the transaction.
   * @returns {Promise<SafeTransaction>} Returns a promise that resolves to the created SafeTransaction.
   * @private
   */
  private createTransactionWithHandlePayment
  /**
   * Creates a Safe transaction designed to be executed using the Gelato Relayer and
   * uses a separate ERC20 transfer to pay the fees to the Gelato relayer.
   *
   * @async
   * @function createTransactionWithTransfer
   * @param {RelayKitTransaction} RelayKitTransaction - Properties needed to create the transaction.
   * @returns {Promise<SafeTransaction>} Returns a promise that resolves to the created SafeTransaction.
   * @private
   */
  private createTransactionWithTransfer
  sendSponsorTransaction(
    target: string,
    encodedTransaction: string,
    chainId: bigint
  ): Promise<RelayResponse>
  sendSyncTransaction(
    target: string,
    encodedTransaction: string,
    chainId: bigint,
    options: MetaTransactionOptions
  ): Promise<RelayResponse>
  relayTransaction({
    target,
    encodedTransaction,
    chainId,
    options
  }: RelayTransaction): Promise<RelayResponse>
  /**
   * Sends the Safe transaction to the Gelato Relayer for execution.
   * If the Safe is not deployed, it creates a batch of transactions including the Safe deployment transaction.
   *
   * @param {SafeTransaction} safeTransaction - The Safe transaction to be executed.
   * @returns {Promise<RelayResponse>} Returns a Promise that resolves with a RelayResponse object.
   */
  executeRelayTransaction(
    safeTransaction: SafeTransaction,
    options?: MetaTransactionOptions
  ): Promise<RelayResponse>
}
