'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
exports.getSimulateTxAccessorContract =
  exports.getCreateCallContract =
  exports.getSignMessageLibContract =
  exports.getMultiSendCallOnlyContract =
  exports.getMultiSendContract =
  exports.getCompatibilityFallbackHandlerContract =
  exports.getProxyFactoryContract =
  exports.getSafeContract =
  exports.getSimulateTxAccessorContractDeployment =
  exports.getCreateCallContractDeployment =
  exports.getSignMessageLibContractDeployment =
  exports.getSafeProxyFactoryContractDeployment =
  exports.getMultiSendContractDeployment =
  exports.getMultiSendCallOnlyContractDeployment =
  exports.getCompatibilityFallbackHandlerContractDeployment =
  exports.getSafeContractDeployment =
    void 0
const safe_deployments_1 = require('@safe-global/safe-deployments')
const config_1 = require('./config')
function getSafeContractDeployment(safeVersion, chainId, isL1SafeSingleton = false) {
  const version = config_1.safeDeploymentsVersions[safeVersion].safeSingletonVersion
  const filters = { version, network: chainId.toString(), released: true }
  if (config_1.safeDeploymentsL1ChainIds.includes(chainId) || isL1SafeSingleton) {
    return (0, safe_deployments_1.getSafeSingletonDeployment)(filters)
  }
  return (0, safe_deployments_1.getSafeL2SingletonDeployment)(filters)
}
exports.getSafeContractDeployment = getSafeContractDeployment
function getCompatibilityFallbackHandlerContractDeployment(safeVersion, chainId) {
  const version = config_1.safeDeploymentsVersions[safeVersion].compatibilityFallbackHandler
  return (0, safe_deployments_1.getCompatibilityFallbackHandlerDeployment)({
    version,
    network: chainId.toString(),
    released: true
  })
}
exports.getCompatibilityFallbackHandlerContractDeployment =
  getCompatibilityFallbackHandlerContractDeployment
function getMultiSendCallOnlyContractDeployment(safeVersion, chainId) {
  const version = config_1.safeDeploymentsVersions[safeVersion].multiSendCallOnlyVersion
  return (0, safe_deployments_1.getMultiSendCallOnlyDeployment)({
    version,
    network: chainId.toString(),
    released: true
  })
}
exports.getMultiSendCallOnlyContractDeployment = getMultiSendCallOnlyContractDeployment
function getMultiSendContractDeployment(safeVersion, chainId) {
  const version = config_1.safeDeploymentsVersions[safeVersion].multiSendVersion
  return (0, safe_deployments_1.getMultiSendDeployment)({
    version,
    network: chainId.toString(),
    released: true
  })
}
exports.getMultiSendContractDeployment = getMultiSendContractDeployment
function getSafeProxyFactoryContractDeployment(safeVersion, chainId) {
  const version = config_1.safeDeploymentsVersions[safeVersion].safeProxyFactoryVersion
  return (0, safe_deployments_1.getProxyFactoryDeployment)({
    version,
    network: chainId.toString(),
    released: true
  })
}
exports.getSafeProxyFactoryContractDeployment = getSafeProxyFactoryContractDeployment
function getSignMessageLibContractDeployment(safeVersion, chainId) {
  const version = config_1.safeDeploymentsVersions[safeVersion].signMessageLibVersion
  return (0, safe_deployments_1.getSignMessageLibDeployment)({
    version,
    network: chainId.toString(),
    released: true
  })
}
exports.getSignMessageLibContractDeployment = getSignMessageLibContractDeployment
function getCreateCallContractDeployment(safeVersion, chainId) {
  const version = config_1.safeDeploymentsVersions[safeVersion].createCallVersion
  return (0, safe_deployments_1.getCreateCallDeployment)({
    version,
    network: chainId.toString(),
    released: true
  })
}
exports.getCreateCallContractDeployment = getCreateCallContractDeployment
function getSimulateTxAccessorContractDeployment(safeVersion, chainId) {
  const version = config_1.safeDeploymentsVersions[safeVersion].createCallVersion
  return (0, safe_deployments_1.getSimulateTxAccessorDeployment)({
    version,
    network: chainId.toString(),
    released: true
  })
}
exports.getSimulateTxAccessorContractDeployment = getSimulateTxAccessorContractDeployment
async function getSafeContract({
  ethAdapter,
  safeVersion,
  customSafeAddress,
  isL1SafeSingleton,
  customContracts
}) {
  const chainId = await ethAdapter.getChainId()
  const singletonDeployment = getSafeContractDeployment(safeVersion, chainId, isL1SafeSingleton)
  const safeContract = await ethAdapter.getSafeContract({
    safeVersion,
    singletonDeployment,
    customContractAddress: customSafeAddress ?? customContracts?.safeSingletonAddress,
    customContractAbi: customContracts?.safeSingletonAbi
  })
  const isContractDeployed = await ethAdapter.isContractDeployed(await safeContract.getAddress())
  if (!isContractDeployed) {
    throw new Error('SafeProxy contract is not deployed on the current network')
  }
  return safeContract
}
exports.getSafeContract = getSafeContract
async function getProxyFactoryContract({ ethAdapter, safeVersion, customContracts }) {
  const chainId = await ethAdapter.getChainId()
  const proxyFactoryDeployment = getSafeProxyFactoryContractDeployment(safeVersion, chainId)
  const safeProxyFactoryContract = await ethAdapter.getSafeProxyFactoryContract({
    safeVersion,
    singletonDeployment: proxyFactoryDeployment,
    customContractAddress: customContracts?.safeProxyFactoryAddress,
    customContractAbi: customContracts?.safeProxyFactoryAbi
  })
  const isContractDeployed = await ethAdapter.isContractDeployed(
    await safeProxyFactoryContract.getAddress()
  )
  if (!isContractDeployed) {
    throw new Error('SafeProxyFactory contract is not deployed on the current network')
  }
  return safeProxyFactoryContract
}
exports.getProxyFactoryContract = getProxyFactoryContract
async function getCompatibilityFallbackHandlerContract({
  ethAdapter,
  safeVersion,
  customContracts
}) {
  const chainId = await ethAdapter.getChainId()
  const fallbackHandlerDeployment = getCompatibilityFallbackHandlerContractDeployment(
    safeVersion,
    chainId
  )
  const fallbackHandlerContract = await ethAdapter.getCompatibilityFallbackHandlerContract({
    safeVersion,
    singletonDeployment: fallbackHandlerDeployment,
    customContractAddress: customContracts?.fallbackHandlerAddress,
    customContractAbi: customContracts?.fallbackHandlerAbi
  })
  const isContractDeployed = await ethAdapter.isContractDeployed(
    await fallbackHandlerContract.getAddress()
  )
  if (!isContractDeployed) {
    throw new Error('CompatibilityFallbackHandler contract is not deployed on the current network')
  }
  return fallbackHandlerContract
}
exports.getCompatibilityFallbackHandlerContract = getCompatibilityFallbackHandlerContract
async function getMultiSendContract({ ethAdapter, safeVersion, customContracts }) {
  const chainId = await ethAdapter.getChainId()
  const multiSendDeployment = getMultiSendContractDeployment(safeVersion, chainId)
  const multiSendContract = await ethAdapter.getMultiSendContract({
    safeVersion,
    singletonDeployment: multiSendDeployment,
    customContractAddress: customContracts?.multiSendAddress,
    customContractAbi: customContracts?.multiSendAbi
  })
  const isContractDeployed = await ethAdapter.isContractDeployed(
    await multiSendContract.getAddress()
  )
  if (!isContractDeployed) {
    throw new Error('MultiSend contract is not deployed on the current network')
  }
  return multiSendContract
}
exports.getMultiSendContract = getMultiSendContract
async function getMultiSendCallOnlyContract({ ethAdapter, safeVersion, customContracts }) {
  const chainId = await ethAdapter.getChainId()
  const multiSendCallOnlyDeployment = getMultiSendCallOnlyContractDeployment(safeVersion, chainId)
  const multiSendCallOnlyContract = await ethAdapter.getMultiSendCallOnlyContract({
    safeVersion,
    singletonDeployment: multiSendCallOnlyDeployment,
    customContractAddress: customContracts?.multiSendCallOnlyAddress,
    customContractAbi: customContracts?.multiSendCallOnlyAbi
  })
  const isContractDeployed = await ethAdapter.isContractDeployed(
    await multiSendCallOnlyContract.getAddress()
  )
  if (!isContractDeployed) {
    throw new Error('MultiSendCallOnly contract is not deployed on the current network')
  }
  return multiSendCallOnlyContract
}
exports.getMultiSendCallOnlyContract = getMultiSendCallOnlyContract
async function getSignMessageLibContract({ ethAdapter, safeVersion, customContracts }) {
  const chainId = await ethAdapter.getChainId()
  const signMessageLibDeployment = getSignMessageLibContractDeployment(safeVersion, chainId)
  const signMessageLibContract = await ethAdapter.getSignMessageLibContract({
    safeVersion,
    singletonDeployment: signMessageLibDeployment,
    customContractAddress: customContracts?.signMessageLibAddress,
    customContractAbi: customContracts?.signMessageLibAbi
  })
  const isContractDeployed = await ethAdapter.isContractDeployed(
    await signMessageLibContract.getAddress()
  )
  if (!isContractDeployed) {
    throw new Error('SignMessageLib contract is not deployed on the current network')
  }
  return signMessageLibContract
}
exports.getSignMessageLibContract = getSignMessageLibContract
async function getCreateCallContract({ ethAdapter, safeVersion, customContracts }) {
  const chainId = await ethAdapter.getChainId()
  const createCallDeployment = getCreateCallContractDeployment(safeVersion, chainId)
  const createCallContract = await ethAdapter.getCreateCallContract({
    safeVersion,
    singletonDeployment: createCallDeployment,
    customContractAddress: customContracts?.createCallAddress,
    customContractAbi: customContracts?.createCallAbi
  })
  const isContractDeployed = await ethAdapter.isContractDeployed(
    await createCallContract.getAddress()
  )
  if (!isContractDeployed) {
    throw new Error('CreateCall contract is not deployed on the current network')
  }
  return createCallContract
}
exports.getCreateCallContract = getCreateCallContract
async function getSimulateTxAccessorContract({ ethAdapter, safeVersion, customContracts }) {
  const chainId = await ethAdapter.getChainId()
  const simulateTxAccessorDeployment = getSimulateTxAccessorContractDeployment(safeVersion, chainId)
  const simulateTxAccessorContract = await ethAdapter.getSimulateTxAccessorContract({
    safeVersion,
    singletonDeployment: simulateTxAccessorDeployment,
    customContractAddress: customContracts?.simulateTxAccessorAddress,
    customContractAbi: customContracts?.simulateTxAccessorAbi
  })
  const isContractDeployed = await ethAdapter.isContractDeployed(
    await simulateTxAccessorContract.getAddress()
  )
  if (!isContractDeployed) {
    throw new Error('SimulateTxAccessor contract is not deployed on the current network')
  }
  return simulateTxAccessorContract
}
exports.getSimulateTxAccessorContract = getSimulateTxAccessorContract
//# sourceMappingURL=safeDeploymentContracts.js.map
