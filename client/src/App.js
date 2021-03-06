import React, { Component } from 'react';
import './App.css';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

class App extends Component {
  state = {products: []}

  componentDidMount(){
    fetch('/api/products')
    .then(res => res.json())
    .then(products => this.setState({products}))
  }

  addProduct = (name, category) => {
    const product = {name, category}
    fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(product)

    }).then(res => res.json())
      .then(p => {
        const {products} = this.state;
        this.setState({products: [...products, p]})
      })
  }

  updateProduct = (id) => {
    fetch (`/api/products/${id}`, {method: 'PUT'})
    .then( res => res.json())
    .then( product => {
      const products = this.state.products.map(p => {
        if (p.id === id)
          return {...p, purchased: !p.purchased}
          return p
      })
      this.setState({products})
    })

  }

  deleteProduct = (id) => {
    fetch(`/api/products/${id}`, {method: 'DELETE'})
    .then(() => {
      const {products} = this.state;
      this.setState({ products: products.filter(p => p.id !== id)})
    })
  }


  render() {
    return (
      <div className="container">
        <ProductForm addProduct={this.addProduct} />
        <ProductList
          products={this.state.products}
          updateProduct={this.updateProduct}
          deleteProduct={this.deleteProduct}
        />
      </div>
    );
  }
}

export default App;
