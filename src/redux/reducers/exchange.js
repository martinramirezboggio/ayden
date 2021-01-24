import * as types from '../types'

const initialState = {
  currencies: null,
  exchangeRate: null,
  isLoading: false,
  error: null
}

export default function currencies(state=initialState, action){
  switch (action.type){
    case types.GET_CURRENCIES_REQUESTED:
      return {
        ...state,
        isLoading: true
      }
    case types.GET_CURRENCIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currencies: [action.payload.base, ...Object.keys(action.payload.rates)],
        exchangeRate: action.payload.rates["USD"]
      }
    case types.GET_CURRENCIES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.message
      }
    case types.CONVERT_CURRENCY_REQUESTED:
      return {
        ...state,
        isLoading: true
      }
    case types.CONVERT_CURRENCY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        exchangeRate: action.payload
      }
    case types.CONVERT_CURRENCY_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.message
      }
    default: return state
  }
}
