import React, { useContext } from 'react';
import '../products/Products.scss';
import {ProductsContext} from '../../Global/ProductsContext';
import ProductsCat from './ProductCategories';
import CategoriesContextProvider from '../../Global/CategoriesContext';

function ProductList() {
  const {list} = useContext(ProductsContext);
  console.log(list);
  return (
    <div className="list-wrapper">
        <h3>Products</h3>
        <div className="main-container d-flex">
          <CategoriesContextProvider>
            <ProductsCat />
            </CategoriesContextProvider>
        <div className="p-wrapper">
        {
          list.map((product) => (
            <div className="products">
              <div key={product.categoryId}></div>
              <div className="g-img">
                <img src={product.productImage} alt="dals"/>
              </div>
              <div className="name">{product.productName}<span>({product.weight})</span></div>
              <div className="price">₹{product.unitPrice}</div>
              <em className="tax">(Inclusive of all taxes)</em>
              <div className="add-to-cart">
                <button type="button">Add To Cart</button>
              </div>
            </div>
          ))
        }
        </div>
        </div>
    </div>
  );
}

export default ProductList;
