/* eslint-disable arrow-body-style */
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = currencyDetails

  return (
    <li className="li-card">
      <div className="profile-card">
        <img className="profile-img" src={currencyLogo} alt={currencyName} />
        <p>{currencyName}</p>
      </div>
      <div className="paragraph-card">
        <p>{usdValue}</p>
        <p className="para">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
