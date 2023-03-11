// == Import
import productData from '../../../data/MOCK_products.json';
import React from 'react';
import "../styles.scss"
import { func, string } from 'prop-types';

const ProductInput = ({ handleChange, product }) => (
  <div className='search__form_product'>
    <label>Produit</label>
    <select value={product} onChange={handleChange} className='search__form_product-select'>
      <option value="">Veuillez selectionner un produit</option>
      {productData.map((prod) => (
        <option key={prod.id}>{prod.name}</option>
      ))}
    </select>
  </div>
);

ProductInput.propTypes = {
  handleChange: func.isRequired,
  product: string.isRequired,
};

export default ProductInput;
