import React from 'react';
import { useState } from 'react';
import AllergyInput from "./AllergyInput";
import BrandInput from "./BrandInput";
import ProductInput from "./ProductInput";
import CategoryInput from "./CategoryInput";
import Results from "../Results"
import productData from "../../data/MOCK_products.json"

const Search = ({product, setProduct, productResult, setProductResult}) => {
  
  const handleChange = (event) => {
    setProduct(event.target.value)  // set state to selected product
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({product});
    setProductResult(productData.find(el => el.name === product)); // find the corresponding product in the json array
  };

    return (
        <div>
        <img />
        <form onSubmit={handleSubmit}>
          {/* <AllergyInput />
        <BrandInput />
        <CategoryInput /> */}
        <ProductInput 
        handleChange={handleChange}
        product={product}
        />


        <button type="submit"> Rechercher </button>
        </form>
        </div>
    )
};

export default Search;
