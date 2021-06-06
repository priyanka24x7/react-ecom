import React, { useContext } from 'react';
import '../products/Products.scss';
import {ProductsContext} from '../../Global/ProductsContext';

function ProductList() {
  const {list} = useContext(ProductsContext);
  console.log(list);
  return (
    <div className="list-wrapper">
        <h3>Products</h3>
        <div className="p-wrapper">
        {
          list.map((product) => (
            <div className="products">
              <div key={product.categoryId}></div>
              <div className="g-img">
                <img src={product.productImage} alt="buy more bhendi"/>
              </div>
              <div className="name">{product.productName}<span>({product.weight})</span></div>
              <div className="price">₹{product.unitPrice}</div>
            </div>
          ))
        }
        </div>
    </div>
  );
}

export default ProductList;
