import React, {Component} from 'react';
import Product from './Product';

const ProductList = ({products, updateProduct, deleteProduct}) => (
  <div>
    {products.map(product =>
      <Product
        key={product.id}
        updateProduct={updateProduct}
        deleteProduct={deleteProduct}
        {...product}
        />
      )
    }
  </div>
)

export default ProductList;
