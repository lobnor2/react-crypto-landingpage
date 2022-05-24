import React , {useState} from 'react'
import './Featured.css'
import BTC from '../assets/btc-img.png'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'
const Featured = () => {

  const [data, setData] = useState(null);



  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false"
  return (
    <div className='featured'>
        <div className="container">
            {/* left side  */}
            <div className="left">
                <h2>Explore top Cryptos Like Bitcoin, Ethereum, and Dogecoin</h2>
                <p>See all available assets: Cryptocurrencies and NFT's</p>
                <button className="btnn">    See More Coins</button>
            </div>




            {/* right side  */}
            <div className="right">
                <div className="top">
                    <img src={BTC} alt="/" />
            
                </div>
                <div>
                  <h5>Bitcoin</h5>
                  <p>$49,000</p>
                </div>
                <span><FiArrowUpRight/>2.5%</span>

            </div>
        </div>

    </div>
  )
}

export default Featured