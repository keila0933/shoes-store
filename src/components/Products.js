import React from 'react'
import axios from 'commons/axios'
import ToolBox from 'components/ToolBox'
import Product from 'components/Product'

class Products extends React.Component {
  state = {
    products: [],
    sourceProducts: [],
  }

  componentDidMount() {
    axios.get('/products').then((response) => {
      this.setState({ products: response.data, sourceProducts: response.data })
    })
  }

  search = (text) => {
    console.log(text)
    //1. Get new array
    let _products = [...this.state.sourceProducts] // use spread syntax to deep copy is suitable for one level arr,
    // but it's unsuitable for multilevel(use cloneDeep)
    //2. Filter New array
    _products = _products.filter((p) => {
      const matchArray = p.name.match(new RegExp(text, 'gi')) //gi , global match + ignore case
      return !!matchArray
    }) //if match not null，then return
    //3. set State
    this.setState({
      products: _products,
    })
  }

  render() {
    return (
      <div>
        <ToolBox search={this.search} />
        <div className="products">
          <div className="columns is-multiline is-desktop">
            {this.state.products.map((p) => (
              <div className="column is-3" key={p.id}>
                <Product product={p} />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Products
