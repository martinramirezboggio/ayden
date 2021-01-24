import {useState, useEffect} from 'react'
import './App.css';
import CurrencyRow from './components/currency/currencyRow'
import {useSelector, useDispatch} from "react-redux"
import { getCurrencies } from "./redux/actions/exchange"

function App() {
  const [rate, setRate] = useState(null)
  const dispatch = useDispatch()
  const currencies = useSelector(state => state)
  console.log(currencies)

  useEffect(() => {
    dispatch(getCurrencies())
  }, [dispatch])

  return (
    <>
      <h1>Currency converter</h1>
      <CurrencyRow />
      <p>rate : {rate}</p>
      <CurrencyRow />
    </>
  );
}

export default App;
