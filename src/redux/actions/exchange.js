import * as types from '../types'

export function getCurrencies(currencies) {
  return {
    type: types.GET_CURRENCIES_REQUESTED,
    payload: currencies
  }
}

export function convertCurrencies(from, to){
  return {
    type: types.CONVERT_CURRENCY_REQUESTED,
    from: from,
    to: to
  }
}
