import React from 'react';

const styles = {
  purchased: {
    textDecoration: 'line-through',
    color: 'grey',
  },
  pointer: { cursor: 'pointer' },
}

const Product = ({
  id,
  name,
  category,
  purchased,
  updateProduct,
  deleteProduct,
}) => (
  <div className="col s12">
    <div className="col m8">
      <div
        style ={ purchased ? styles.purchase : {} }
        className="center"
      >
      {name}
      </div>
    </div>
      <div className="col m2">
        <input
          id={`product=${id}`}
          type="checkbox"
          defaultChecked={purchased}
          onClick={() => updateProduct(id)}
        />
        <label htmlFor={`product-${id}`}>Purchased?</label>
      </div>
      <div
        className="col m2"
        style={styles.pointer}
        onClick={() => deleteProduct(id)}
      >
      X
      </div>
  </div>
)

export default Product;
