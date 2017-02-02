export const actionFailed = (actionType, errorMessage) => {
  if (errorMessage) {
    return {
      type: actionType,
      status: 'error',
      isFetching: false,
      errorMessage     
    }    
  } else {
    return {
      type: actionType,
      status: 'error',
      isFetching: false
    }
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