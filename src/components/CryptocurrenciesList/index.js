import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyData: [], isLoader: true}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updateData = data.map(eachItem => ({
      currencyLogo: eachItem.currency_logo,
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      euroValue: eachItem.euro_value,
      usdValue: eachItem.usd_value,
    }))

    this.setState({currencyData: updateData, isLoader: false})
  }

  getRender = () => {
    const {currencyData} = this.state

    return (
      <div>
        <h1>Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="card">
          <div className="top-card">
            <h1>Coin Type</h1>
            <div className="usd-euro-card">
              <h1 className="usd-heading">USD</h1>
              <h1>EURO</h1>
            </div>
          </div>
          {currencyData.map(each => (
            <CryptocurrencyItem currencyDetails={each} key={each.id} />
          ))}
        </div>
      </div>
    )
  }

  render() {
    const {isLoader} = this.state

    return (
      <div>
        {isLoader ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div>{this.getRender()}</div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
