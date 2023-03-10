import PropTypes from 'prop-types';
import Page from '../Page';
import Header from '../Header';
import Search from '../Search';
import Result from '../Results';

import './styles.scss';
import cart from '../../assets/img/cart.gif';

// Destructuring props to use them
const Home = ({
  product, setProduct, productResult, setProductResult, isLogged, isConnected, isDisconnected,
}) => (
  <Page>
    <Header isLogged={isLogged} isDisconnected={isDisconnected} />
    <div>
      <Search
        product={product}
        setProduct={setProduct}
        productResult={productResult}
        setProductResult={setProductResult}
      />
      {!product
      && (
      <div className="waiting_cart" />
      )}
      {product && <Result productResult={productResult} />}

    </div>
  </Page>
);

Home.propTypes = {
  isLogged: PropTypes.bool,
  isConnected: PropTypes.func,
  isDisconnected: PropTypes.func,
};

export default Home;
