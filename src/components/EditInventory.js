import React from 'react'
import { toast } from 'react-toastify'
import axios from 'commons/axios'

class EditInventory extends React.Component {
  state = {
    id: '',
    name: '',
    price: '',
    tags: '',
    image: '',
    status: 'available',
  }

  componentDidMount() {
    const { id, name, image, tags, price, status } = this.props.product
    this.setState({
      id,
      name,
      image,
      tags,
      price,
      status,
    })
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
    axios.put(`products/${this.state.id}`, product).then((res) => {
      console.log(res.data)
      this.props.close(res.data)
      toast.success('Edit Success')
    })
  }

  onDelete = () => {
    axios.delete(`products/${this.state.id}`).then((res) => {
      this.props.deleteProduct(this.state.id)
      this.props.close()
      toast.success('Edit Success')
    })
  }

  render() {
    return (
      <div className="inventory">
        <p className="title has-text-centered">Inventory</p>
        <form onSubmit={this.submit}>
          <div className="field">
            <div className="control">
              <label className="label">Name</label>
              <textarea
                className="textarea is-small"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="label">price</label>
              <input
                type="number"
                className="input is-small"
                name="price"
                value={this.state.price}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="label">Tags</label>
              <input
                type="text"
                className="input is-small"
                name="tags"
                value={this.state.tags}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label className="label">Image</label>
              <input
                type="text"
                className="input is-small"
                name="image"
                value={this.state.image}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
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
          </div>
          <div className="btn-field edit">
            <button className="button">Submit</button>
            <button
              className="button is-danger"
              type="button"
              onClick={this.onDelete}
            >
              Delete
            </button>
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

export default EditInventory
