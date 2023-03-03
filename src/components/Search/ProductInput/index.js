// == Import
import productData from '../../../data/MOCK_products.json';
import React from 'react';
import "../styles.scss"
import { func, string } from 'prop-types';

const ProductInput = ({handleChange, product}) => {
    
    return (
        <div className='search__form_product'>
            <label>Produit</label>
                <select value={product} onChange={handleChange} className='search__form_product-select'>
                {productData.map(el => {
                  return(
                    <option key={el.id}>{el.name}</option> // can only search by name, id is not defined
                  )})}
                </select>
        </div>
    )
};

ProductInput.propTypes = {
  handleChange: func.isRequired,
}

export default ProductInput;
