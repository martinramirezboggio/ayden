import * as types from '../types'

const initialState = {
  currencies: [],
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
        currencies: action.currencies
      }
    case types.GET_CURRENCIES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.message
      }
    default: return state
  }
}
