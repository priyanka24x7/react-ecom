import React, {createContext, useEffect, useState} from 'react';
import {getProducts,getCategories} from '../Services/Product';
export const ProductsContext = createContext();

const ProductsContextProvider = (props) =>{
    //State for product list
    const [list, setList] = useState([]);

    //State for Categories
    const [categories, setCategories] = useState([]);
    // console.log(categories);
    useEffect(() => {
     getProducts()
       .then(items => {
           setList(items)
       });
       getCategories()
       .then(cat => {
        setCategories(cat)
       })
   }, [])
    return(
        <ProductsContext.Provider 
                value={{list: [...list], 
                categories: [...categories]}}>
        {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider;