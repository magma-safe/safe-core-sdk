import { AbstractSigner, Provider } from 'ethers'
import { SafeVersion } from '@safe-global/safe-core-sdk-types'
import CompatibilityFallbackHandler_V1_3_0_Ethers from './CompatibilityFallbackHandler/v1.3.0/CompatibilityFallbackHandler_V1_3_0_Ethers'
import CompatibilityFallbackHandler_V1_4_1_Ethers from './CompatibilityFallbackHandler/v1.4.1/CompatibilityFallbackHandler_V1_4_1_Ethers'
import CreateCallContract_V1_3_0_Ethers from './CreateCall/v1.3.0/CreateCallEthersContract_V1_3_0_Ethers'
import CreateCallContract_V1_4_1_Ethers from './CreateCall/v1.4.1/CreateCallEthersContract_V1_4_1_Ethers'
import MultiSendContract_V1_1_1_Ethers from './MultiSend/v1.1.1/MultiSendContract_V1_1_1_Ethers'
import MultiSendContract_V1_3_0_Ethers from './MultiSend/v1.3.0/MultiSendContract_V1_3_0_Ethers'
import MultiSendContract_V1_4_1_Ethers from './MultiSend/v1.4.1/MultiSendContract_V1_4_1_Ethers'
import MultiSendCallOnlyContract_V1_3_0_Ethers from './MultiSendCallOnly/v1.3.0/MultiSendCallOnlyContract_V1_3_0_Ethers'
import MultiSendCallOnlyContract_V1_4_1_Ethers from './MultiSendCallOnly/v1.4.1/MultiSendCallOnlyContract_V1_4_1_Ethers'
import SafeContract_V1_0_0_Ethers from './Safe/v1.0.0/SafeContract_V1_0_0_Ethers'
import SafeContract_V1_1_1_Ethers from './Safe/v1.1.1/SafeContract_V1_1_1_Ethers'
import SafeContract_V1_2_0_Ethers from './Safe/v1.2.0/SafeContract_V1_2_0_Ethers'
import SafeContract_V1_3_0_Ethers from './Safe/v1.3.0/SafeContract_V1_3_0_Ethers'
import SafeContract_V1_4_1_Ethers from './Safe/v1.4.1/SafeContract_V1_4_1_Ethers'
import SafeProxyFactoryContract_V1_0_0_Ethers from './SafeProxyFactory/v1.0.0/SafeProxyFactoryContract_V1_0_0_Ethers'
import SafeProxyFactoryContract_V1_1_1_Ethers from './SafeProxyFactory/v1.1.1/SafeProxyFactoryContract_V1_1_1_Ethers'
import SafeProxyFactoryContract_V1_3_0_Ethers from './SafeProxyFactory/v1.3.0/SafeProxyFactoryContract_V1_3_0_Ethers'
import SafeProxyFactoryContract_V1_4_1_Ethers from './SafeProxyFactory/v1.4.1/SafeProxyFactoryContract_V1_4_1_Ethers'
import SignMessageLibContract_V1_3_0_Ethers from './SignMessageLib/v1.3.0/SignMessageLibContract_V1_3_0_Ethers'
import SignMessageLibContract_V1_4_1_Ethers from './SignMessageLib/v1.4.1/SignMessageLibContract_V1_4_1_Ethers'
import SimulateTxAccessorContract_V1_3_0_Ethers from './SimulateTxAccessor/v1.3.0/SimulateTxAccessorContract_V1_3_0_Ethers'
import SimulateTxAccessorContract_V1_4_1_Ethers from './SimulateTxAccessor/v1.4.1/SimulateTxAccessorContract_V1_4_1_Ethers'
export declare function getSafeContractInstance(
  safeVersion: SafeVersion,
  contractAddress: string,
  signerOrProvider: AbstractSigner | Provider
):
  | SafeContract_V1_4_1_Ethers
  | SafeContract_V1_3_0_Ethers
  | SafeContract_V1_2_0_Ethers
  | SafeContract_V1_1_1_Ethers
  | SafeContract_V1_0_0_Ethers
export declare function getCompatibilityFallbackHandlerContractInstance(
  safeVersion: SafeVersion,
  contractAddress: string,
  signerOrProvider: AbstractSigner | Provider
): CompatibilityFallbackHandler_V1_4_1_Ethers | CompatibilityFallbackHandler_V1_3_0_Ethers
export declare function getMultiSendContractInstance(
  safeVersion: SafeVersion,
  contractAddress: string,
  signerOrProvider: AbstractSigner | Provider
):
  | MultiSendContract_V1_4_1_Ethers
  | MultiSendContract_V1_3_0_Ethers
  | MultiSendContract_V1_1_1_Ethers
export declare function getMultiSendCallOnlyContractInstance(
  safeVersion: SafeVersion,
  contractAddress: string,
  signerOrProvider: AbstractSigner | Provider
): MultiSendCallOnlyContract_V1_4_1_Ethers | MultiSendCallOnlyContract_V1_3_0_Ethers
export declare function getSafeProxyFactoryContractInstance(
  safeVersion: SafeVersion,
  contractAddress: string,
  signerOrProvider: AbstractSigner | Provider
):
  | SafeProxyFactoryContract_V1_4_1_Ethers
  | SafeProxyFactoryContract_V1_3_0_Ethers
  | SafeProxyFactoryContract_V1_1_1_Ethers
  | SafeProxyFactoryContract_V1_0_0_Ethers
export declare function getSignMessageLibContractInstance(
  safeVersion: SafeVersion,
  contractAddress: string,
  signerOrProvider: AbstractSigner | Provider
): SignMessageLibContract_V1_4_1_Ethers | SignMessageLibContract_V1_3_0_Ethers
export declare function getCreateCallContractInstance(
  safeVersion: SafeVersion,
  contractAddress: string,
  signerOrProvider: AbstractSigner | Provider
): CreateCallContract_V1_4_1_Ethers | CreateCallContract_V1_3_0_Ethers
export declare function getSimulateTxAccessorContractInstance(
  safeVersion: SafeVersion,
  contractAddress: string,
  signerOrProvider: AbstractSigner | Provider
): SimulateTxAccessorContract_V1_4_1_Ethers | SimulateTxAccessorContract_V1_3_0_Ethers
