import * as types from '../types'

const initialState = {
  currencies: null,
  exchangeRate: null,
  error: null
}

export default function currencies(state=initialState, action){
  switch (action.type){
    case types.GET_CURRENCIES_REQUESTED:
      return {
        ...state,
      }
    case types.GET_CURRENCIES_SUCCESS:
      return {
        ...state,
        currencies: [action.payload.base, ...Object.keys(action.payload.rates)],
        exchangeRate: action.payload.rates["USD"]
      }
    case types.GET_CURRENCIES_FAILED:
      return {
        ...state,
        error: action.message
      }
    case types.CONVERT_CURRENCY_REQUESTED:
      return {
        ...state,
      }
    case types.CONVERT_CURRENCY_SUCCESS:
      return {
        ...state,
        exchangeRate: action.payload
      }
    case types.CONVERT_CURRENCY_FAILED:
      return {
        ...state,
        error: action.message
      }
    default: return state
  }
}
