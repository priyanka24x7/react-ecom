import React, {createContext, useEffect, useState} from 'react';
import {getProducts} from '../Services/Product';

export const ProductsContext = createContext();

const ProductsContextProvider = (props) =>{
    console.log("products");
    const [list, setList] = useState([]);

    useEffect(() => {
     getProducts()
       .then(items => {
           setList(items)
       })
   }, [])
    return(
        <ProductsContext.Provider value={{list: [...list]}}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider;