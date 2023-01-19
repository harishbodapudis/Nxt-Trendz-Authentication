// Write your JS code here

import {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="img-box">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="home-header-logo"
          />
        </div>
        <ul className="header-links-container">
          <li className="link-item">Home</li>
          <li className="link-item">Products</li>
          <li className="link-item">Cart</li>
          <li className="link-item-btn">
            <button type="button" className="logout-btn">
              Logout
            </button>
          </li>
        </ul>
      </div>
    )
  }
}

export default Header
