// == Import
import './styles.css';
import { useState } from 'react';

// Components
import Home from 'src/components/Home';
import Product from 'src/components/Product';
import Search from 'src/components/Search';
import Results from 'src/components/Results';
import Header from '../Header';
import Footer from '../Footer';
import Error from '../Error'; 
import ProfileForm from '../ProfileForm';
import LoginForm from '../LoginForm';
import Profil from '../Profil';



// == App
function App() {

  const [product, setProduct] = useState(''); // select a product from option list
  const [productResult, setProductResult] = useState(''); // corresponding data to selected product
  const [isLoggedInApp, setIsLoggedInApp] = useState(); // Initialize isLoggedInApp to Undefined.

  const userConnected = () => {
    setIsLoggedInApp(true) // Update isLoggedInApp in true when user connected
  }

  const userDisconnected = () => {
    setIsLoggedInApp(false) // Update isLoggedInApp in true when user disconnected
  };

  console.log(isLoggedInApp);

  return (
    <div className="app" >
      <Header isLogged={isLoggedInApp} isConnected={userConnected} isDisconnected={userDisconnected}/>
      <Search 
      product={product}
      setProduct={setProduct}
      productResult={productResult}
      setProductResult={setProductResult}/>
      <Results 
      productResult={productResult} />
      <Product />
      <Footer /> 
      <LoginForm isLogged={isLoggedInApp} isConnected={userConnected} />
      <ProfileForm />
      <Profil />
    </div>
  );
}

// == Export
export default App;
