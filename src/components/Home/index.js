import PropTypes from 'prop-types';
import Page from '../Page';
import Header from '../Header';
import Search from '../Search';
import Result from '../Results';

import './styles.scss';
import cart from '../../assets/img/cart.gif';
import Introduction from '../Intro';
import Product from '../Product';

// Destructuring props to use them
const Home = ({
  product, setProduct, productResult, setProductResult, isLogged, isConnected, isDisconnected,setIsSearchSubmitted,isSearchSubmitted,isResultClicked,setIsResultClicked
}) => (
  <Page>
    <Header isLogged={isLogged} isDisconnected={isDisconnected} />
    <div>
      <Introduction />
      <Search
        product={product}
        setProduct={setProduct}
        productResult={productResult}
        setProductResult={setProductResult}
        setIsSearchSubmitted={setIsSearchSubmitted}
        setIsResultClicked={setIsResultClicked}
      />
      {!isSearchSubmitted
      && (
      <div className="waiting_cart" />
      )}
      {isSearchSubmitted && <Result productResult={productResult} />}
      {isResultClicked && <Product productResult={productResult} />}

    </div>
  </Page>
);

Home.propTypes = {
  isLogged: PropTypes.bool,
  isConnected: PropTypes.func,
  isDisconnected: PropTypes.func,
};

export default Home;
