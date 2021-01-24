import { put, takeEvery } from "redux-saga/effects"
import axios from 'axios'
import * as types from '../types'

const urls = {
  BASE_URL: 'https://api.exchangeratesapi.io/latest'
}

function* fetchCurrencies(action){
  try {
    const currenciesResponse = yield axios.get(urls.BASE_URL)
    console.log({currenciesResponse})
    yield put({
      type: types.GET_CURRENCIES_SUCCESS,
      currencies: currenciesResponse.data
    })
  }catch(e){
    yield put({
      type: types.GET_CURRENCIES_FAILED,
      message: e.message
    })
  }
}

function* currencySaga() {
  yield takeEvery(types.GET_CURRENCIES_REQUESTED, fetchCurrencies)
}

export default currencySaga
