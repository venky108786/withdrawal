// Write your code here
import {Component} from 'react'
import './index.css'

class CashWithdrawal extends Component {
  render() {
    return (
      <div className="bg">
        <div className="bg1">
          <div className="top-heading-container">
            <h1 className="s-logo">S</h1>
            <h1 className="heading">Sarah Williams</h1>
          </div>

          <div className="amount-container">
            <h1 className="your-balance">Your Balance</h1>
            <div className="amount-blog">
              <h1 className="amount">2000</h1>
              <p className="amount-down">in Rupees</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
