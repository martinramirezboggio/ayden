import * as types from '../types'

export function getCurrencies(currencies) {
  return {
    type: types.GET_CURRENCIES_REQUESTED,
    payload: currencies
  }
} 