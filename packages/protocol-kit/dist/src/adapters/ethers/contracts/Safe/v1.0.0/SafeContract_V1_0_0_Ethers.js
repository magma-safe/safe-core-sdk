'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const utils_1 = require('../../../../../adapters/ethers/utils')
const constants_1 = require('../../../../../adapters/ethers/utils/constants')
const SafeContractEthers_1 = __importDefault(require('../SafeContractEthers'))
class SafeContract_V1_0_0_Ethers extends SafeContractEthers_1.default {
  constructor(contract) {
    super(contract)
    this.contract = contract
  }
  async setup(setupConfig, options) {
    const {
      owners,
      threshold,
      to = constants_1.ZERO_ADDRESS,
      data = constants_1.EMPTY_DATA,
      paymentToken = constants_1.ZERO_ADDRESS,
      payment = 0,
      paymentReceiver = constants_1.ZERO_ADDRESS
    } = setupConfig
    if (options && !options.gasLimit) {
      options.gasLimit = await this.estimateGas(
        'setup',
        [owners, threshold, to, data, paymentToken, payment, paymentReceiver],
        {
          ...options
        }
      )
    }
    const txResponse = await this.contract.setup(
      owners,
      threshold,
      to,
      data,
      paymentToken,
      payment,
      paymentReceiver,
      { ...options }
    )
    return (0, utils_1.toTxResult)(txResponse, options)
  }
  async getModules() {
    return this.contract.getModules()
  }
  async isModuleEnabled(moduleAddress) {
    const modules = await this.getModules()
    const isModuleEnabled = modules.some((enabledModuleAddress) =>
      (0, utils_1.sameString)(enabledModuleAddress, moduleAddress)
    )
    return isModuleEnabled
  }
}
exports.default = SafeContract_V1_0_0_Ethers
//# sourceMappingURL=SafeContract_V1_0_0_Ethers.js.map
