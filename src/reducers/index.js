const reducer = (state = [], action) => {
  console.log('reducer')
  console.log('action.type:' + JSON.stringify(action))
  switch (action.type) {
    case 'LOGIN': 
      console.log(action)
      return action
    default :
      console.log(state)
      return state
  }
}

export default reducer