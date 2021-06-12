import React, {createContext, useEffect, useState} from 'react';
import {getCategories} from '../Services/Categories';

export const CategoriesContext = createContext();

const CategoriesContextProvider = (props) =>{
    console.log("categories");
    const [list, setList] = useState([]);

    useEffect(() => {
     getCategories()
       .then(items => {
           setList(items)
       })
   }, [])
    return(
        <CategoriesContext.Provider value={{list: [...list]}}>
            {props.children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesContextProvider;