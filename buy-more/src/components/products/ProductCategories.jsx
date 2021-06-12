import React, { useContext } from 'react';
import { CategoriesContext } from '../../Global/CategoriesContext';

function CategoryList() {
    const {list} = useContext(CategoriesContext);
    console.log(list);
    return(
        <>
            <div className="category-section">
                <ul>
                    {
                        list.map((category) =>(
                            <li>{category.categoryName}</li>
                        ) )
                    }
                           
                </ul>
            </div>
        </>
    ) 
}
export default CategoryList;