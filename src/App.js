import {useState, useEffect} from 'react'
import './App.css';
import CurrencyRow from './components/currency/currencyRow'
import {useSelector, useDispatch} from "react-redux"
import {convertCurrencies, getCurrencies} from "./redux/actions/exchange"

const INITIAL_FROM_CURRENCY = "EUR"
const INITIAL_TO_CURRENCY = "USD"

function App() {
  const [amount, setAmount] = useState(100)
  const [hasAmountFromChange, setHasAmountFromChange] = useState(true)
  const [from, setFrom] = useState(INITIAL_FROM_CURRENCY)
  const [to, setTo] = useState(INITIAL_TO_CURRENCY)

  const dispatch = useDispatch()
  const isLoading = useSelector(state => state.currencies.isLoading)
  const currencies = useSelector(state => state.currencies.currencies)
  const rate = useSelector(state => state.currencies.exchangeRate)

  useEffect(() => {
    dispatch(getCurrencies())

  }, [dispatch])

  function handleFromAmountChange(e){
    e.preventDefault()
    setAmount(e.target.value)
    setHasAmountFromChange(true)
  }

  function handleToAmountChange(e){
    e.preventDefault()
    setAmount(e.target.value)
    setHasAmountFromChange(false)
  }

  let toAmount, fromAmount

  if(hasAmountFromChange){
    fromAmount = amount
    toAmount = amount * rate
  }else{
    toAmount = amount
    fromAmount = amount / rate
  }

  function convert(from, to){
    if(from && to){
      dispatch(convertCurrencies(from, to))
    }
  }

  function onChangeSelectFrom(e){
    e.preventDefault()
    const from = e.target.value
    setFrom(from)
    convert(from, to)
  }

  function onChangeSelectTo(e){
    e.preventDefault()
    const to = e.target.value
    setTo(to)
    convert(from, to)
  }

  return (
    <div>
      {
        isLoading ? <p>Loading...</p> :
          <div id="converter">
            <h1>Currency converter</h1>
            <CurrencyRow
              currencies={currencies}
              amount={fromAmount}
              onChangeCurrency={(e) => onChangeSelectFrom(e)}
              onChangeAmount={handleFromAmountChange}
              selectedCurrency={from}
            />
            <p>Exchange rate: {rate}</p>
            <CurrencyRow
              currencies={currencies}
              amount={toAmount}
              onChangeCurrency={(e) => onChangeSelectTo(e)}
              onChangeAmount={handleToAmountChange}
              selectedCurrency={to}
            />
          </div>
      }
    </div>
  )
}

export default App;
