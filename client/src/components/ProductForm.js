

import React, {Component} from 'react';

class ProductForm extends Component {
  state = {name: '', category: '', purchased: ''}

  handleChange = (e) => {
    const { name, value} = e.target
    this.setState({[name]: value})
  }


  handleSubmit = (e) => {
    e.preventDefault()
    const {productName, category} = this.state;
    this.props.addProduct(productName, category)
    this.setState({productName: '', category: ''})
  }


  render(){
    const {productName, category} = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          name="productName"
          placeholder="Add Item"
          require
          value={productName}
          onChange={this.handleChange}
        />
        <input
          name="category"
          placeholder="Category"
          require
          value={category}
          onChange={this.handleChange}
        />
        <button className="btn">Submit</button>
      </form>
    )
  }
}


export default ProductForm;
