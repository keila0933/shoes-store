import React from 'react'

class Login extends React.Component {
  //受控組件
  state = {
    email: '',
    password: '',
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleSubmit = (event) => {
    //1.阻止默認事件行為
    event.preventDefault()
    //2.獲取表單數據
    console.log(this.state)
    //3.處理登錄邏輯

    //4.跳轉到首頁Pages
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="login-wrapper">
        <form className="box login-box" onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="text"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                type="password"
                className="input"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="control">
            <button className="button is-fullwidth is-primary">Login</button>
          </div>
        </form>
      </div>
    ) //JSX Babel
    //return React.createElement('p', { className: 'login' }, 'Login Component')
  }
}

export default Login
