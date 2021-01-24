function CurrencyRow (props) {
  const {amount, currencies, selectedCurrency, onChangeAmount, onChangeCurrency} = props

  return(
    <div>
      <input type="number" value={amount} onChange={onChangeAmount} />
      <select value={selectedCurrency} onChange={onChangeCurrency} className="select">
        {
          !!currencies && currencies.map( currency =>
              <option key={currency} value={currency}>{currency}</option>
            )
        }
      </select>
    </div>
  )
}

export default CurrencyRow
