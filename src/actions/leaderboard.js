export const changeWeight = (index, weight) => ({
  type: `CHANGE_WEIGHT`,
  data: {index, weight}
})

export const changeInterval = (index, interval) => ({
  type: `CHANGE_INTERVAL`,
  data: {index, interval}
})

export const changeQuantity = (value) => ({
  type: `CHANGE_QUANTITY`,
  value
})

export const selectAddress = (address) => ({
  type: `SELECT_ADDRESS`,
  address
})

export const clearAddress = () => ({
  type: `CLEAR_ADDRESS`
})

export const addAddress = (address) => ({
  type: `ADD_ADDRESS`,
  address
})

export const removeAddress = (address) => ({
  type: `REMOVE_ADDRESS`,
  address
})

export const addAddresses = (addresses) => ({
  type: `ADD_ADDRESSES`,
  addresses
})