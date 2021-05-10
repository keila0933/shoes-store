import React, { useState, useMemo } from 'react'
import axios from 'commons/axios'
import { formatPrice } from 'commons/helper'

const CartItem = (props) => {
  const [mount, setMount] = useState(props.cart.mount)
  const { id, name, image, price } = props.cart || {}

  const handleChange = (e) => {
    const _mount = parseInt(e.target.value)
    setMount(_mount)
    const newCart = {
      ...props.cart,
      mount: _mount,
    }
    axios.put(`/carts/${id}`, newCart).then((res) => {
      props.updateCart(newCart)
    })
  }

  const sumPrice = useMemo(() => {
    //useMemo will return value
    return formatPrice(mount * parseInt(price))
  }, [mount, price]) //when mount,price change then return formatPrice()
  const deleteCart = () => {
    axios.delete(`/carts/${id}`).then((res) => {
      props.deleteCart(props.cart)
    })
  }

  return (
    <div className="cart-item">
      <div className="delete-item" onClick={deleteCart}>
        <span className="close">X</span>
      </div>
      <div className="item-img">
        <img src={image} alt={name} width="100" />
      </div>
      <div className="cart-info">
        <div className="cart-name">{name}</div>
        <div className="price-num">
          <div className="column">
            <span className="price">{formatPrice(price)}</span>
          </div>
          <div className="item-num">
            <input
              type="number"
              className="input num-input"
              min={1}
              value={mount}
              onChange={handleChange}
            />
          </div>
          <div className="sum-price">
            <span>{sumPrice}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CartItem
