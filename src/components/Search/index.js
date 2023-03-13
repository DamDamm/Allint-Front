// == Import
import React from 'react';
import './styles.scss';

import productsData from '../../data/MOCK_products.json';

// Components
import ProductInput from './ProductInput';

// V2 options components
// import AllergyInput from "./AllergyInput";
// import BrandInput from "./BrandInput";
// import CategoryInput from "./CategoryInput";

const Search = ({
  product, setProduct, productResult, setProductResult, setIsSearchSubmitted, setIsResultClicked,
}) => {
  const handleChange = (event) => {
    setProduct(event.target.value); // set state to selected product
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSearchSubmitted(true);
    setIsResultClicked(true);
    setProductResult(productsData.find((el) => el.name === product)); // set the corresponding product in the json array as the result
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        {/* <AllergyInput />
        <BrandInput />
        <CategoryInput /> */}
        <ProductInput
          handleChange={handleChange}
          product={product}
        />

        <button type="submit" disabled={!product}> Rechercher </button>
        {/* set the button disabled if no product is selected or if the first option is selected */}
      </form>
    </div>
  );
};

export default Search;
