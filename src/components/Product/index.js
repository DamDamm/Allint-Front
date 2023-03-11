import PropTypes from 'prop-types';

import Page from '../Page';
import Header from '../Header';

import './styles.scss';

import products from '../../data/MOCK_products.json';

// Destructuring props to use them
const Product = ({ isLogged, isConnected, isDisconnected, productResult, }) => {
  // const findProduct = products.find((product) => product.id === 8076800195057); // remplacer ici le '8076800195057' par l' id de l'element cliqué
  const toggler = true;
  const classNameProduct = toggler ? 'product__card right' : 'product__card wrong';

  return (
    // <Page>
    //   <Header isLogged={isLogged} isConnected={isConnected} isDisconnected={isDisconnected} />
      <div className={classNameProduct}>
        <div className="product__picture">
          <div className="product__title">
            <h1 className="product__brand">{productResult.brand}</h1>
            <h2 className="product__name">{productResult.name}</h2>
          </div>
          <img src={productResult.product_picture} alt={productResult.name} />
        </div>
        
        <div className="product__informations">
          
          <div className="product__ingredients">
            <div>
              <img className="product__ingredients-picture" src={productResult.product_ingredients} alt="ingrédients" />
            </div>
            <ul className="product__ingredients-list">
              {productResult.ingredients.map((ingredient) => (
                <li key={ingredient} className="product__ingredients-item">{ingredient}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    // </Page>
  );
};

Product.propTypes = {
  isLogged: PropTypes.string,
  isConnected: PropTypes.func,
  isDisconnected: PropTypes.func,
};

export default Product;
