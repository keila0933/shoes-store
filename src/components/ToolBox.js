import React from 'react'
import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'

class ToolBox extends React.Component {
  state = {
    searchText: '',
    active: false,
  }

  handleChange = (e) => {
    const value = e.target.value
    this.setState({ searchText: value })
    this.props.search(value)
  }

  clearSearchText = () => {
    this.setState({ searchText: '' })
    this.props.search('')
  }

  goCart = () => {
    if (!global.auth.isLogin()) {
      this.props.history.push('/login')
      toast.info('Please Login First')
      return
    }
    this.props.history.push('/cart')
  }

  open = () => {
    if (this.state.active === true) {
      this.setState({ active: false })
    } else {
      this.setState({ active: true })
    }
  }

  render() {
    const _class = {
      true: 'search-box active',
      false: 'search-box',
    }
    return (
      <div className="tool-box">
        <div className="logo-text">Store</div>
        <div className={_class[this.state.active]}>
          <input
            type="text"
            className="input"
            placeholder="Search Product"
            value={this.state.searchText}
            onChange={this.handleChange}
          />
          <button className="clear-btn" onClick={this.clearSearchText}>
            X
          </button>
          <button className="open-btn" onClick={this.open}>
            <i className="fas fa-search"></i>
          </button>
        </div>
        <div to="/Cart" className="cart-box" onClick={this.goCart}>
          <i className="fas fa-shopping-cart"></i>
          <span className="cart-num">({this.props.cartNum})</span>
        </div>
      </div>
    )
  }
}

export default withRouter(ToolBox)
