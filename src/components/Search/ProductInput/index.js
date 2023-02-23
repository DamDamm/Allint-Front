import productData from '../../../data/MOCK_products.json';
import React from 'react';
import { func, string } from 'prop-types';

const ProductInput = ({handleChange, product}) => {
    
    return (

        <div>
            <label>Produit</label>
                <select value={product} onChange={handleChange}>
                {productData.map(el => {
                  return(
                    <option key={el.id}>{el.name}</option>
                  )})}
                </select>
        </div>
    )
};

ProductInput.propTypes = {
  handleChange: func.isRequired
}

export default ProductInput;
