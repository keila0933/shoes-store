import React from 'react'
import { withRouter } from 'react-router-dom'

class SearchBox extends React.Component {
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
    )
  }
}

export default withRouter(SearchBox)
