import PropTypes from 'prop-types';
import Page from '../Page';
import Header from '../Header';
import Search from "../Search";
import Result from "../Results";

//Destructuring props to use them
const Home = ({product, setProduct, productResult, setProductResult, isLogged, isConnected, isDisconnected}) => {
  return (
    <Page>
      <Header isLogged={isLogged} isConnected={isConnected} isDisconnected={isDisconnected}/>
      <div>
        <Search product={product}
            setProduct={setProduct}
            productResult={productResult}
            setProductResult={setProductResult}/>
        <Result productResult={productResult} />
      </div>
    </Page>
  );
};
  
Home.propTypes = {
  isLogged: PropTypes.bool, 
  isConnected: PropTypes.func,
  isDisconnected:PropTypes.func,
 };

  export default Home;