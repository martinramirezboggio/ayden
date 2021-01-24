import { put, takeEvery } from "redux-saga/effects"
import axios from 'axios'
import * as types from '../types'

const urls = {
  BASE_URL: 'https://api.exchangeratesapi.io/latest'
}

function* fetchCurrencies(action){
  try {
    const currenciesResponse = yield axios.get(urls.BASE_URL)
    yield put({
      type: types.GET_CURRENCIES_SUCCESS,
      payload: currenciesResponse.data
    })
  }catch(e){
    yield put({
      type: types.GET_CURRENCIES_FAILED,
      message: e.message
    })
  }
}

function* convertCurrency(action){
  try {
    const url = `${urls.BASE_URL}?base=${action.from}&symbols=${action.to}`
    const response = yield axios.get(url)
    yield put({
      type: types.CONVERT_CURRENCY_SUCCESS,
      payload: response.data.rates[action.to]
    })
  }catch (e){
    yield put({
      type: types.CONVERT_CURRENCY_FAILED,
      message: e.message
    })
  }
}

export function* currencySaga() {
  yield takeEvery(types.GET_CURRENCIES_REQUESTED, fetchCurrencies)
}

export function* convertorSaga(){
  yield takeEvery(types.CONVERT_CURRENCY_REQUESTED, convertCurrency)
}
