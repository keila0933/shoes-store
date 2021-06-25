import React from 'react'
import Products from 'components/Products'
import Layout from 'Layout'
require('newrelic')

class App extends React.Component {
  render() {
    return (
      <Layout>
        <Products />
      </Layout>
    )
  }
}

export default App
