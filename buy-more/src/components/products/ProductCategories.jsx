import React, { useContext } from 'react';
import { ProductsContext } from '../../Global/ProductsContext';

function CategoryList() {
    const {categories} = useContext(ProductsContext);
    return(
        <>
            <div className="category-section">
                <ul>
                    {
                        categories.map((category,index) =>(
                            <li key={index}>{category.categoryName}</li>
                        ) )
                    }
                           
                </ul>
            </div>
        </>
    ) 
}
export default CategoryList;