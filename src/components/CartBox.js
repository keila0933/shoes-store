import React from 'react'
import { withRouter } from 'react-router-dom'
import { toast } from 'react-toastify'

class CartBox extends React.Component {
  goCart = () => {
    if (!global.auth.isLogin()) {
      this.props.history.push('/login')
      toast.info('Please Login First')
      return
    }
    this.props.history.push('/cart')
  }

  render() {
    return (
      <div to="/Cart" className="cart-box" onClick={this.goCart}>
        <i className="fas fa-shopping-cart"></i>
        <span className="cart-num">({this.props.cartNum})</span>
      </div>
    )
  }
}
export default withRouter(CartBox)
