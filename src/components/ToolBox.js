import React from 'react'
import { withRouter } from 'react-router-dom'
import SearchBox from 'components/SearchBox'
import CartBox from 'components/CartBox'

class ToolBox extends React.Component {
  render() {
    return (
      <div className="tool-box">
        <div className="logo-text">Store</div>
        <SearchBox search={this.search} />
        <CartBox cartNum={this.state.cartNum} />
      </div>
    )
  }
}
export default withRouter(ToolBox)
