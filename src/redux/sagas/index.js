import { all } from 'redux-saga/effects'
import {currencySaga, convertorSaga} from './currencySaga'

export default function* rootSaga(){
  yield all([
    currencySaga(),
    convertorSaga()
  ])
}
