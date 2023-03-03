import './styles.scss';

import products from '../../data/MOCK_products.json';

const Product = () => {
  const findProduct = products.find((product) => product.id === 8076800195057); // remplacer ici le '8076800195057' par l' id de l'element cliqué
  const toggler = true;
  const classNameProduct = toggler ? 'product__card right' : 'product__card wrong';
  return (
    <div className={classNameProduct}>
      <Header />
      <div className="product__picture">
        <img src={findProduct.product_picture} alt={findProduct.name} />
      </div>
      <div className="product__informations">
        <div className="product__title">
          <h1 className="product__brand">{findProduct.brand}</h1>
          <h2 className="product__name">{findProduct.name}</h2>
        </div>
        <div className="product__ingredients">
          <div>
            <img className="product__ingredients-picture" src={findProduct.product_ingredients} alt="ingrédients" />
          </div>
          <ul className="product__ingredients-list">
            {findProduct.ingredients.map((ingredient) => (
              <li key={ingredient} className="product__ingredients-item">{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
      <Header />
    </div>
  );
};

export default Product;
