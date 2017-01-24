export const actionFailed = (actionType, errorMessage) => {
  return {
    type: actionType,
    status: 'error',
    isFetching: false,
    errorMessage     
  }
}

export const actionStart = (actionType) => {
  return {
    type: actionType,
    isFetching: true
  }
}

export const actionSuccess = (actionType, object) => {
  return Object.assign({
    type: actionType,
    status: 'success',
    isFetching: false
  }, object)
}