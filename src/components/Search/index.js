import React from 'react';
import { useState } from 'react';
import AllergyInput from "./AllergyInput";
import BrandInput from "./BrandInput";
import ProductInput from "./ProductInput";
import CategoryInput from "./CategoryInput";
import productData from "../../data/MOCK_products.json"
import { element, elementType } from 'prop-types';

const Search = () => {
  const [product, setProduct] = useState('');
  
  

  const handleChange = (event) => {
    setProduct(event.target.value) 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({product})
    console.log(productData.find(el => el.name === product))
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
