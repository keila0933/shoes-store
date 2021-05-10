import React from 'react'
import { toast } from 'react-toastify'
import axios from 'commons/axios'

class AddInventory extends React.Component {
  state = {
    name: '',
    price: '',
    tags: '',
    image: '',
    status: 'available',
  }

  handleChange = (e) => {
    let value = e.target.value
    const name = e.target.name
    if (name === 'price') {
      value = parseInt(value)
    }
    this.setState({
      [name]: value,
    })
  }

  submit = (e) => {
    e.preventDefault()
    const product = { ...this.state }
    axios.post('products', product).then((res) => {
      console.log(res.data)
      this.props.close(res.data)
      toast.success('Add Success')
    })
  }

  render() {
    return (
      <div className="inventory">
        <p className="title">Inventory</p>
        <form onSubmit={this.submit}>
          <div className="field">
            <label className="label">Name</label>
            <textarea
              className="textarea"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label className="label">price</label>
            <input
              type="number"
              className="input"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label className="label">Tags</label>
            <input
              type="text"
              className="input"
              name="tags"
              value={this.state.tags}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label className="label">Image</label>
            <input
              type="text"
              className="input"
              name="image"
              value={this.state.image}
              onChange={this.handleChange}
            />
          </div>
          <div className="field">
            <label className="label">Status</label>
            <div className="select is-fullwidth">
              <select
                name="status"
                value={this.state.status}
                onChange={this.handleChange}
              >
                <option>available</option>
                <option>unavailable</option>
              </select>
            </div>
          </div>
          <div className="btn-field">
            <button className="button">Submit</button>
            <button
              className="button"
              type="button"
              onClick={() => this.props.close()}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddInventory
