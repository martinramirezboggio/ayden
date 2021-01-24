import { combineReducers } from 'redux'
import currencies from './exchange'

const rootReducer = combineReducers({
  currencies: currencies
})

export default rootReducer