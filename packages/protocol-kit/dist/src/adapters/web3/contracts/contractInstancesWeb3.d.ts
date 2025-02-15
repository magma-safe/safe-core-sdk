import { Gnosis_safe as SafeSingleton_V1_0_0 } from '../../../../typechain/src/web3-v1/v1.0.0/Gnosis_safe'
import { Proxy_factory as SafeProxyFactory_V1_0_0 } from '../../../../typechain/src/web3-v1/v1.0.0/Proxy_factory'
import { Gnosis_safe as SafeSingleton_V1_1_1 } from '../../../../typechain/src/web3-v1/v1.1.1/Gnosis_safe'
import { Multi_send as MultiSend_V1_1_1 } from '../../../../typechain/src/web3-v1/v1.1.1/Multi_send'
import { Proxy_factory as SafeProxyFactory_V1_1_1 } from '../../../../typechain/src/web3-v1/v1.1.1/Proxy_factory'
import { Gnosis_safe as SafeSingleton_V1_2_0 } from '../../../../typechain/src/web3-v1/v1.2.0/Gnosis_safe'
import { Compatibility_fallback_handler as CompatibilityFallbackHandler_V1_3_0 } from '../../../../typechain/src/web3-v1/v1.3.0/Compatibility_fallback_handler'
import { Create_call as CreateCall_V1_3_0 } from '../../../../typechain/src/web3-v1/v1.3.0/Create_call'
import { Gnosis_safe as SafeSingleton_V1_3_0 } from '../../../../typechain/src/web3-v1/v1.3.0/Gnosis_safe'
import { Multi_send as MultiSend_V1_3_0 } from '../../../../typechain/src/web3-v1/v1.3.0/Multi_send'
import { Multi_send_call_only as MultiSendCallOnly_V1_3_0 } from '../../../../typechain/src/web3-v1/v1.3.0/Multi_send_call_only'
import { Proxy_factory as SafeProxyFactory_V1_3_0 } from '../../../../typechain/src/web3-v1/v1.3.0/Proxy_factory'
import { Sign_message_lib as SignMessageLib_V1_3_0 } from '../../../../typechain/src/web3-v1/v1.3.0/Sign_message_lib'
import { Simulate_tx_accessor as SimulateTxAccessor_V1_3_0 } from '../../../../typechain/src/web3-v1/v1.3.0/Simulate_tx_accessor'
import { Compatibility_fallback_handler as CompatibilityFallbackHandler_V1_4_1 } from '../../../../typechain/src/web3-v1/v1.4.1/Compatibility_fallback_handler'
import { Create_call as CreateCall_V1_4_1 } from '../../../../typechain/src/web3-v1/v1.4.1/Create_call'
import { Multi_send as MultiSend_V1_4_1 } from '../../../../typechain/src/web3-v1/v1.4.1/Multi_send'
import { Multi_send_call_only as MultiSendCallOnly_V1_4_1 } from '../../../../typechain/src/web3-v1/v1.4.1/Multi_send_call_only'
import { Safe as SafeSingleton_V1_4_1 } from '../../../../typechain/src/web3-v1/v1.4.1/Safe'
import { Safe_proxy_factory as SafeProxyFactory_V1_4_1 } from '../../../../typechain/src/web3-v1/v1.4.1/Safe_proxy_factory'
import { Sign_message_lib as SignMessageLib_V1_4_1 } from '../../../../typechain/src/web3-v1/v1.4.1/Sign_message_lib'
import { Simulate_tx_accessor as SimulateTxAccessor_V1_4_1 } from '../../../../typechain/src/web3-v1/v1.4.1/Simulate_tx_accessor'
import { SafeVersion } from '@safe-global/safe-core-sdk-types'
import CompatibilityFallbackHandler_V1_3_0_Web3 from './CompatibilityFallbackHandler/v1.3.0/CompatibilityFallbackHandler_V1_3_0_Web3'
import CompatibilityFallbackHandler_V1_4_1_Web3 from './CompatibilityFallbackHandler/v1.4.1/CompatibilityFallbackHandler_V1_4_1_Web3'
import CreateCallContract_V1_3_0_Web3 from './CreateCall/v1.3.0/CreateCallEthersContract_V1_3_0_Web3'
import CreateCallContract_V1_4_1_Web3 from './CreateCall/v1.4.1/CreateCallEthersContract_V1_4_1_Web3'
import MultiSendContract_V1_1_1_Web3 from './MultiSend/v1.1.1/MultiSendContract_V1_1_1_Web3'
import MultiSendContract_V1_3_0_Web3 from './MultiSend/v1.3.0/MultiSendContract_V1_3_0_Web3'
import MultiSendContract_V1_4_1_Web3 from './MultiSend/v1.4.1/MultiSendContract_V1_4_1_Web3'
import MultiSendCallOnlyContract_V1_3_0_Web3 from './MultiSendCallOnly/v1.3.0/MultiSendCallOnlyContract_V1_3_0_Web3'
import MultiSendCallOnlyContract_V1_4_1_Web3 from './MultiSendCallOnly/v1.4.1/MultiSendCallOnlyContract_V1_4_1_Web3'
import SafeContract_V1_0_0_Web3 from './Safe/v1.0.0/SafeContract_V1_0_0_Web3'
import SafeContract_V1_1_1_Web3 from './Safe/v1.1.1/SafeContract_V1_1_1_Web3'
import SafeContract_V1_2_0_Web3 from './Safe/v1.2.0/SafeContract_V1_2_0_Web3'
import SafeContract_V1_3_0_Web3 from './Safe/v1.3.0/SafeContract_V1_3_0_Web3'
import SafeContract_V1_4_1_Web3 from './Safe/v1.4.1/SafeContract_V1_4_1_Web3'
import SafeProxyFactoryContract_V1_0_0_Web3 from './SafeProxyFactory/v1.0.0/SafeProxyFactoryContract_V1_0_0_Web3'
import SafeProxyFactoryContract_V1_1_1_Web3 from './SafeProxyFactory/v1.1.1/SafeProxyFactoryContract_V1_1_1_Web3'
import SafeProxyFactoryContract_V1_3_0_Web3 from './SafeProxyFactory/v1.3.0/SafeProxyFactoryContract_V1_3_0_Web3'
import SafeProxyFactoryContract_V1_4_1_Web3 from './SafeProxyFactory/v1.4.1/SafeProxyFactoryContract_V1_4_1_Web3'
import SignMessageLibContract_V1_3_0_Web3 from './SignMessageLib/v1.3.0/SignMessageLibContract_V1_3_0_Web3'
import SignMessageLibContract_V1_4_1_Web3 from './SignMessageLib/v1.4.1/SignMessageLibContract_V1_4_1_Web3'
import SimulateTxAccessorContract_V1_3_0_Web3 from './SimulateTxAccessor/v1.3.0/SimulateTxAccessorContract_V1_3_0_Web3'
import SimulateTxAccessorContract_V1_4_1_Web3 from './SimulateTxAccessor/v1.4.1/SimulateTxAccessorContract_V1_4_1_Web3'
export declare function getSafeContractInstance(
  safeVersion: SafeVersion,
  safeContract:
    | SafeSingleton_V1_4_1
    | SafeSingleton_V1_3_0
    | SafeSingleton_V1_2_0
    | SafeSingleton_V1_1_1
    | SafeSingleton_V1_0_0
):
  | SafeContract_V1_4_1_Web3
  | SafeContract_V1_3_0_Web3
  | SafeContract_V1_2_0_Web3
  | SafeContract_V1_1_1_Web3
  | SafeContract_V1_0_0_Web3
export declare function getCompatibilityFallbackHandlerContractInstance(
  safeVersion: SafeVersion,
  compatibilityFallbackhandlerContract:
    | CompatibilityFallbackHandler_V1_4_1
    | CompatibilityFallbackHandler_V1_3_0
): CompatibilityFallbackHandler_V1_4_1_Web3 | CompatibilityFallbackHandler_V1_3_0_Web3
export declare function getMultiSendContractInstance(
  safeVersion: SafeVersion,
  multiSendContract: MultiSend_V1_4_1 | MultiSend_V1_3_0 | MultiSend_V1_1_1
): MultiSendContract_V1_4_1_Web3 | MultiSendContract_V1_3_0_Web3 | MultiSendContract_V1_1_1_Web3
export declare function getMultiSendCallOnlyContractInstance(
  safeVersion: SafeVersion,
  multiSendCallOnlyContract: MultiSendCallOnly_V1_4_1 | MultiSendCallOnly_V1_3_0
): MultiSendCallOnlyContract_V1_4_1_Web3 | MultiSendCallOnlyContract_V1_3_0_Web3
export declare function getSafeProxyFactoryContractInstance(
  safeVersion: SafeVersion,
  safeProxyFactoryContract:
    | SafeProxyFactory_V1_4_1
    | SafeProxyFactory_V1_3_0
    | SafeProxyFactory_V1_1_1
    | SafeProxyFactory_V1_0_0
):
  | SafeProxyFactoryContract_V1_4_1_Web3
  | SafeProxyFactoryContract_V1_3_0_Web3
  | SafeProxyFactoryContract_V1_1_1_Web3
  | SafeProxyFactoryContract_V1_0_0_Web3
export declare function getSignMessageLibContractInstance(
  safeVersion: SafeVersion,
  signMessageLibContract: SignMessageLib_V1_4_1 | SignMessageLib_V1_3_0
): SignMessageLibContract_V1_4_1_Web3 | SignMessageLibContract_V1_3_0_Web3
export declare function getCreateCallContractInstance(
  safeVersion: SafeVersion,
  createCallContract: CreateCall_V1_4_1 | CreateCall_V1_3_0
): CreateCallContract_V1_4_1_Web3 | CreateCallContract_V1_3_0_Web3
export declare function getSimulateTxAccessorContractInstance(
  safeVersion: SafeVersion,
  simulateTxAccessorContract: SimulateTxAccessor_V1_4_1 | SimulateTxAccessor_V1_3_0
): SimulateTxAccessorContract_V1_4_1_Web3 | SimulateTxAccessorContract_V1_3_0_Web3
