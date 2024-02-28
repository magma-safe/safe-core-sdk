'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.RelayKitBasePack = void 0
class RelayKitBasePack {
  /**
   * The packs implemented using our SDK should extend this class and therefore provide a Safe SDK instance
   * @constructor
   * @param protocolKit The Safe SDK instance
   */
  constructor(protocolKit) {
    this.protocolKit = protocolKit
  }
}
exports.RelayKitBasePack = RelayKitBasePack
//# sourceMappingURL=RelayKitBasePack.js.map
