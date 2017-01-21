import thunkMiddleware from 'redux-thunk'
import reducers from './reducers'
import {createStore, applyMiddleware} from 'redux'


const configureStore = () => {
  const store = createStore(
    reducers, 
    [],
    applyMiddleware(
      thunkMiddleware
    )
  )

  store.subscribe(() => {
    console.log('store update')
    console.log(store.getState())
  })
  return store
}

export default configureStore
