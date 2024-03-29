import {serializeBoard} from '../utils/serialize'

// ENTITIES
export const getEntity = (state, entityType) => state.entities[entityType] || {}

export const getObjectByEntityAndId = (state, entityType, id) => ({
  ...getEntity(state, entityType)[id]
}) || {}

export const getObjectsByEntityAndIds = (state, entityType, ids) => (Array.isArray(ids) && ids.length > 0) ?
  ids.map(id => getObjectByEntityAndId(state, entityType, id)) :
  []

export const getObjectsByEntityAndQuery = (state, entityType, query, key) => getIdsByEntityAndQuery(state, entityType, query, key).map(id => getEntity(state, entityType)[id])

export const getArrayFromEntity = (state, entityType, entityId, arrayName) => {
  const result = getObjectByEntityAndId(state, entityType, entityId)[arrayName]

  if (Array.isArray(result)) {
    return result
  }

  return []
}

// FETCHERS
export const isFetching = (state) => !!state.fetchers.async
export const isSchemaFetching = (state, schema) => !!state.fetchers.schemas[schema]
export const isIdFetching = (state, id) => !!state.fetchers.ids[id]

// COLLECTIONS
const getCollection = (state, entityType) => state.collections[entityType] || {}
const getCollectionByEntity = (state, entityType) => getCollection(state, entityType) || {}

export const getArrayFromQuery = (state, entityType, query, key) => getIdsByEntityAndQuery(state, entityType, query, key)

export const getIdsByEntityAndQuery = (state, entityType, query, key) => getCollectionByEntity(state, entityType)[query] ?
  (Array.isArray(getCollectionByEntity(state, entityType)[query][key]) ? getCollectionByEntity(state, entityType)[query][key] : []) :
  []

export const getIdsByEntityAndLastQuery = (state, entityType, key) => getCollectionByEntity(state, entityType)["last"] && getCollectionByEntity(state, entityType)[getCollectionByEntity(state, entityType)["last"]] ?
  (Array.isArray(getCollectionByEntity(state, entityType)[getCollectionByEntity(state, entityType)["last"]][key]) ? getCollectionByEntity(state, entityType)[getCollectionByEntity(state, entityType)["last"]][key] : []) :
  []

export const getMetaByEntityAndQuery = (state, entityType, query) => getCollectionByEntity(state, entityType)[query] ?
  getCollectionByEntity(state, entityType)[query]["meta"] : {}

// Board Validator Addresses
export const getBoardAddresses = (state) => {
  const quantity = state.leaderboard.quantity
  const weights = state.leaderboard.weights
  const intervals = state.leaderboard.intervals
  const query = serializeBoard(weights, intervals, quantity)
  return getIdsByEntityAndQuery(state, 'validator', query, 'addresses')
}

// API
export const getApiHost = (state) => getObjectByEntityAndId(state, 'api', 'v1').host
export const getApiNetwork = (state) => getObjectByEntityAndId(state, 'api', 'v1').network
export const getApiVersion = (state) => getObjectByEntityAndId(state, 'api', 'v1').pkg_version
export const getApiNetworkDetails = (state) => getObjectByEntityAndId(state, 'api', 'v1').chain || {}
export const getApiCacheDetails = (state) => getObjectByEntityAndId(state, 'api', 'v1').cache || {}
export const getApiFeatured = (state) => getObjectByEntityAndId(state, 'api', 'v1').featured || []