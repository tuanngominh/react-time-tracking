export const actionFailed = (actionType, errorMessage) => {
  return {
    type: actionType,
    status: 'error',
    isFetching: false,
    errorMessage     
  }
}

export const actionStart = (actionType, object) => {
  return Object.assign({
    type: actionType,
    isFetching: true
  }, object)
}

export const actionSuccess = (actionType, object) => {
  return Object.assign({
    type: actionType,
    status: 'success',
    isFetching: false
  }, object)
}