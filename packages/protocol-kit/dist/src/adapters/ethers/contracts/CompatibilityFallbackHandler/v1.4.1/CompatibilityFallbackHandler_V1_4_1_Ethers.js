'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
const CompatibilityFallbackHandlerEthersContract_1 = __importDefault(
  require('../CompatibilityFallbackHandlerEthersContract')
)
class CompatibilityFallbackHandler_V1_4_1_Ethers extends CompatibilityFallbackHandlerEthersContract_1.default {
  constructor(contract) {
    super(contract)
    this.contract = contract
  }
}
exports.default = CompatibilityFallbackHandler_V1_4_1_Ethers
//# sourceMappingURL=CompatibilityFallbackHandler_V1_4_1_Ethers.js.map
