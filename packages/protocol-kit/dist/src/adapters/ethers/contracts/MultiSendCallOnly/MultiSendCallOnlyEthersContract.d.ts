import {
  Multi_send_call_only as MultiSendCallOnly_V1_3_0,
  Multi_send_call_onlyInterface as MultiSendCallOnlyInterface
} from '../../../../../typechain/src/ethers-v6/v1.3.0/Multi_send_call_only'
import { Multi_send_call_only as MultiSendCallOnly_V1_4_1 } from '../../../../../typechain/src/ethers-v6/v1.4.1/Multi_send_call_only'
import { MultiSendCallOnlyContract } from '@safe-global/safe-core-sdk-types'
declare abstract class MultiSendCallOnlyEthersContract implements MultiSendCallOnlyContract {
  contract: MultiSendCallOnly_V1_4_1 | MultiSendCallOnly_V1_3_0
  constructor(contract: MultiSendCallOnly_V1_4_1 | MultiSendCallOnly_V1_3_0)
  getAddress(): Promise<string>
  encode: MultiSendCallOnlyInterface['encodeFunctionData']
}
export default MultiSendCallOnlyEthersContract
