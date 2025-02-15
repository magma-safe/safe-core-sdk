import { SafeVersion } from '@safe-global/safe-core-sdk-types'
export declare const DEFAULT_SAFE_VERSION: SafeVersion
export declare const SAFE_BASE_VERSION: SafeVersion
type SafeDeploymentsVersions = {
  [version: string]: {
    safeSingletonVersion: string
    safeSingletonL2Version?: string
    safeProxyFactoryVersion: string
    compatibilityFallbackHandler: string
    multiSendVersion: string
    multiSendCallOnlyVersion?: string
    signMessageLibVersion?: string
    createCallVersion?: string
  }
}
export declare const safeDeploymentsVersions: SafeDeploymentsVersions
export declare const safeDeploymentsL1ChainIds: bigint[]
export {}
