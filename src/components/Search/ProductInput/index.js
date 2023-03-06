// == Import
import React from 'react';
import { func, string } from 'prop-types';
import productData from '../../../data/MOCK_products.json';

const ProductInput = ({ handleChange, product }) => (
  <div>
    <label>Produit</label>
    <select value={product} onChange={handleChange}>
      <option value="titre">Veuillez selectionner un produit</option>
      {productData.map((el) => (
        <option key={el.id}>{el.name}</option>
      ))}
    </select>
  </div>
);

ProductInput.propTypes = {
  handleChange: func.isRequired,
  product: string.isRequired,
};

export default ProductInput;
