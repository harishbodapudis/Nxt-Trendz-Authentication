// Write your JS code here

import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', isError: false, errorMsg: ''}

  updateUsername = e => {
    this.setState({username: e.target.value})
  }

  updatePassword = e => {
    this.setState({password: e.target.value})
  }

  successSubmit = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitDetails = async e => {
    e.preventDefault()
    const {username, password} = this.state

    const url = 'https://apis.ccbp.in/login'
    const userDetails = {
      username,
      password,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (
      response.ok === true &&
      username === 'rahul' &&
      password === 'rahul@2021'
    ) {
      console.log(data)
      this.successSubmit()
    } else {
      console.log(data)

      console.log(data.error_msg)
      this.setState({isError: true, errorMsg: data.error_msg})
    }

    this.setState({username: '', password: ''})
  }

  renderUserName = () => {
    const {username} = this.state
    return (
      <>
        <label className="usr-label" htmlFor="username">
          Username
        </label>
        <br />
        <input
          type="text"
          id="username"
          value={username}
          className="usr-field"
          placeholder="Username"
          onChange={this.updateUsername}
        />
      </>
    )
  }

  renderPassword = () => {
    const {password} = this.state
    return (
      <>
        <label className="password-label" htmlFor="password">
          Password
        </label>
        <br />
        <input
          value={password}
          type="password"
          id="password"
          className="password-field"
          placeholder="Password"
          onChange={this.updatePassword}
        />
      </>
    )
  }

  render() {
    const {isError, errorMsg} = this.state

    return (
      <div className="login-main-container">
        <div className="login-page-body">
          <div className="login-img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              alt="website login"
              className="login-img"
            />
          </div>
          <div className="login-form-container">
            <div className="login-logo-box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                alt="website logo"
                className="login-form-logo"
              />
            </div>
            <form className="form-box" onSubmit={this.submitDetails}>
              <div>{this.renderUserName()}</div>
              <br />
              <div>{this.renderPassword()}</div>
              <br />

              <div>
                <button type="submit" className="submit-btn">
                  Login
                </button>
              </div>
              {isError && <p className="error-msg-box">{errorMsg}</p>}
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
