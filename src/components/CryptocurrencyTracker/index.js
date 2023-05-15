/* eslint-disable arrow-body-style */
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const CryptocurrencyTracker = () => {
  return (
    <div className="container">
      <ul className="ul-card">
        <CryptocurrenciesList />
      </ul>
    </div>
  )
}

export default CryptocurrencyTracker
