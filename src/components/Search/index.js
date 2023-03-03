// == Import
import React from 'react';
import productData from "../../data/MOCK_products.json"
import "./styles.scss"

//Components
import AllergyInput from "./AllergyInput";
import BrandInput from "./BrandInput";
import ProductInput from "./ProductInput";
import CategoryInput from "./CategoryInput";


const Search = ({product, setProduct, setProductResult}) => {
  
  const handleChange = (event) => {
    setProduct(event.target.value)  // set state to selected product
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setProductResult(productData.find(el => el.name === product)); // set the corresponding product in the json array as the result
    console.log(product)
  };

    return (
        <div>
        <img />
        <form onSubmit={handleSubmit} className='search__form'>
          {/* <AllergyInput />
        <BrandInput />
        <CategoryInput /> */}
        <ProductInput 
        handleChange={handleChange}
        product={product}
        />


        <button type="submit" className='search__form-button'> Rechercher </button>
        </form>
        </div>
    )
};

export default Search;
