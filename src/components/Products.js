import React from 'react'
import axios from 'commons/axios'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ToolBox from 'components/ToolBox'
import Product from 'components/Product'
import Panel from 'components/Panel'
import AddInventory from 'components/AddInventory'

class Products extends React.Component {
  state = {
    products: [],
    sourceProducts: [],
    cartNum: 0,
  }

  componentDidMount() {
    axios.get('/products').then((response) => {
      this.setState({ products: response.data, sourceProducts: response.data })
    })
    this.updateCartNum()
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

  toAdd = () => {
    Panel.open({
      component: AddInventory,
      callback: (data) => {
        if (data) {
          this.add(data)
        }
      },
    })
  }

  add = (product) => {
    const _products = [...this.state.products]
    _products.push(product)
    const _sProducts = [...this.state.sourceProducts]
    _sProducts.push(product)
    this.setState({ products: _products, sourceProducts: _sProducts })
  }

  update = (product) => {
    const _products = [...this.state.products]
    const _index = _products.findIndex((p) => p.id === product.id)
    _products.splice(_index, 1, product)
    const _sProducts = [...this.state.sourceProducts]
    const _sindex = _products.findIndex((p) => p.id === product.id)
    _sProducts.splice(_sindex, 1, product)
    this.setState({ products: _products, sourceProducts: _sProducts })
  }

  delete = (id) => {
    const _products = this.state.products.filter((p) => p.id !== id)
    const _sProducts = this.state.sourceProducts.filter((p) => p.id !== id)
    this.setState({ products: _products, sourceProducts: _sProducts })
  }

  updateCartNum = async () => {
    const num = await this.initCartNum()
    this.setState({
      cartNum: num,
    })
  }

  initCartNum = async () => {
    const user = global.auth.getUser() || null
    if (user) {
      const res = await axios.get(`/carts`, {
        params: {
          userId: user.email,
        },
      })
      const carts = res.data || []
      const cartNum = carts
        .map((c) => c.mount)
        .reduce((accumulator, value) => accumulator + value, 0)
      return cartNum || 0
    } else {
      return 0
    }
  }

  render() {
    return (
      <div>
        <ToolBox search={this.search} cartNum={this.state.cartNum} />
        <div className="products">
          <div className="columns is-multiline is-desktop">
            <TransitionGroup component={null}>
              {this.state.products.map((p) => {
                return (
                  <CSSTransition
                    classNames="product-fade"
                    timeout={{ enter: 300, exit: 300 }}
                    key={p.id}
                  >
                    <div className="column is-3" key={p.id}>
                      <Product
                        product={p}
                        update={this.update}
                        delete={this.delete}
                        updateCartNum={this.updateCartNum}
                      />
                    </div>
                  </CSSTransition>
                )
              })}
            </TransitionGroup>
          </div>
          {(global.auth.getUser() || {}).type === 1 && (
            <button className="button is-primary add-btn" onClick={this.toAdd}>
              add
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default Products
