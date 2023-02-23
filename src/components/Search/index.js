import React from 'react';
import { useState } from 'react';
import AllergyInput from "./AllergyInput";
import BrandInput from "./BrandInput";
import ProductInput from "./ProductInput";
import CategoryInput from "./CategoryInput";



const Search = () => {
  const [product, setProduct] = useState('');
  

  const handleChange = (event) => {
    setProduct(event.target.value)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({product})
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
