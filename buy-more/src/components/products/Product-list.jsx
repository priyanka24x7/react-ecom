import React, { useContext } from 'react';
import '../products/Products.scss';
import {ProductsContext} from '../../Global/ProductsContext';

function ProductList() {
  const {products} = useContext(ProductsContext);
  return (
    <div className="list-wrapper">
        <h3>Products</h3>
        <div className="p-wrapper">
        {
          products.map((product) => (
            <div class="products">
              <div key={product.ProductId}></div>
              <div className="g-img">
                <img src={product.ProductImage} alt="buy more bhendi"/>
              </div>
              <div className="name">{product.ProductName}<span>({product.WeightInGms})</span></div>
              <div className="price">₹{product.UnitPriceINR}</div>
            </div>
          ))
        }
        </div>
    </div>
  );
}

export default ProductList;
