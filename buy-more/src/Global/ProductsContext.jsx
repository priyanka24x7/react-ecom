import React, {createContext, useState} from 'react';

export const ProductsContext = createContext();

const ProductsContextProvider = (props) =>{
    const [products] = useState([
        { ProductId:"1",
        ProductName:"Britania Bourbon",
        ProductType:"Biscuits",
        ProductDescription:"xyz",
        ProductImage:"https://rukminim1.flixcart.com/image/832/832/k8j3gcw0/cookie-biscuit/g/x/h/100-good-day-cashew-cookies-britannia-original-imafqgw99uggqb24.jpeg?q=70",
        MaxQuantity:"10",
        UnitPriceINR:"15",
        WeightInGms:"50g"
        },
        {
        ProductId:"2",
        ProductName:"Britania MarieGold",
        ProductType:"Biscuits",
        ProductDescription:"xyz",
        ProductImage:"https://rukminim1.flixcart.com/image/832/832/k8j3gcw0/cookie-biscuit/g/x/h/100-good-day-cashew-cookies-britannia-original-imafqgw99uggqb24.jpeg?q=70",
        MaxQuantity:"20",
        UnitPriceINR:"15",
        WeightInGms:"100g"
        },
        {
        ProductId:"3",
        ProductName:"Britania GoodDay",
        ProductType:"Biscuits",
        ProductDescription:"xyz",
        ProductImage:"https://rukminim1.flixcart.com/image/832/832/k8j3gcw0/cookie-biscuit/g/x/h/100-good-day-cashew-cookies-britannia-original-imafqgw99uggqb24.jpeg?q=70",
        MaxQuantity:"15",
        UnitPriceINR:"20",
        WeightInGms:"70g"
        },
        {
            ProductId:"2",
            ProductName:"Britania MarieGold",
            ProductType:"Biscuits",
            ProductDescription:"xyz",
            ProductImage:"https://rukminim1.flixcart.com/image/832/832/k8j3gcw0/cookie-biscuit/g/x/h/100-good-day-cashew-cookies-britannia-original-imafqgw99uggqb24.jpeg?q=70",
            MaxQuantity:"20",
            UnitPriceINR:"15",
            WeightInGms:"100g"
            },
            {
            ProductId:"3",
            ProductName:"Britania GoodDay",
            ProductType:"Biscuits",
            ProductDescription:"xyz",
            ProductImage:"https://rukminim1.flixcart.com/image/832/832/k8j3gcw0/cookie-biscuit/g/x/h/100-good-day-cashew-cookies-britannia-original-imafqgw99uggqb24.jpeg?q=70",
            MaxQuantity:"15",
            UnitPriceINR:"20",
            WeightInGms:"70g"
            },
        ]);
    return(
        <ProductsContext.Provider value={{products: [...products]}}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export default ProductsContextProvider;