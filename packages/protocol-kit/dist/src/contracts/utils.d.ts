/// <reference types="node" />
import {
  EthAdapter,
  SafeContract,
  SafeProxyFactoryContract,
  SafeVersion
} from '@safe-global/safe-core-sdk-types'
import { ContractNetworkConfig, SafeAccountConfig, SafeDeploymentConfig } from '../types'
export declare const PREDETERMINED_SALT_NONCE =
  '0xb1073742015cbcf5a3a4d9d1ae33ecf619439710b89475f92e2abd2117e90f90'
export interface PredictSafeAddressProps {
  ethAdapter: EthAdapter
  chainId: bigint
  safeAccountConfig: SafeAccountConfig
  safeDeploymentConfig?: SafeDeploymentConfig
  isL1SafeSingleton?: boolean
  customContracts?: ContractNetworkConfig
}
export interface encodeSetupCallDataProps {
  ethAdapter: EthAdapter
  safeAccountConfig: SafeAccountConfig
  safeContract: SafeContract
  customContracts?: ContractNetworkConfig
  customSafeVersion?: SafeVersion
}
export declare function encodeCreateProxyWithNonce(
  safeProxyFactoryContract: SafeProxyFactoryContract,
  safeSingletonAddress: string,
  initializer: string
): string
export declare function encodeSetupCallData({
  ethAdapter,
  safeAccountConfig,
  safeContract,
  customContracts,
  customSafeVersion
}: encodeSetupCallDataProps): Promise<string>
/**
 * Provides a chain-specific default salt nonce for generating unique addresses
 * for the same Safe configuration across different chains.
 *
 * @param {bigint} chainId - The chain ID associated with the chain.
 * @returns {string} The chain-specific salt nonce in hexadecimal format.
 */
export declare function getChainSpecificDefaultSaltNonce(chainId: bigint): string
export declare function predictSafeAddress({
  ethAdapter,
  chainId,
  safeAccountConfig,
  safeDeploymentConfig,
  isL1SafeSingleton,
  customContracts
}: PredictSafeAddressProps): Promise<string>
export declare const validateSafeAccountConfig: ({ owners, threshold }: SafeAccountConfig) => void
export declare const validateSafeDeploymentConfig: ({ saltNonce }: SafeDeploymentConfig) => void
/**
 * Generates a zkSync Era address. zkSync Era uses a distinct address derivation method compared to Ethereum
 * see: https://era.zksync.io/docs/reference/architecture/differences-with-ethereum.html#address-derivation
 *
 * @param {string} from - The sender's address.
 * @param {SafeVersion} safeVersion - The version of the safe.
 * @param {Buffer} salt - The salt used for address derivation.
 * @param {string} input - Additional input data for the derivation.
 *
 * @returns {string} The derived zkSync Era address.
 */
export declare function zkSyncEraCreate2Address(
  from: string,
  safeVersion: SafeVersion,
  salt: Buffer,
  input: string
): string
