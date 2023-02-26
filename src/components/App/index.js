// == Import
import reactLogo from './react-logo.svg';
import './styles.css';
import { useState } from 'react';



//Components
import Home from 'src/components/Home';
import Header from '../Header';
import Product from 'src/components/Product';
import Search from 'src/components/Search';
import Results from 'src/components/Results';
import Footer from '../Footer';
import Error from '../Error'; 
import LoginForm from '../LoginForm';

      

// == App
const App = () => {

  const [isLoggedInApp, setIsLoggedInApp] = useState(); // Initialize isLoggedInApp to Undefined.

  const userConnected = () => {
    setIsLoggedInApp(true) // Update isLoggedInApp in true when user connected
  }

  const userDisconnected = () => {
    setIsLoggedInApp(false) // Update isLoggedInApp in true when user disconnected
  };

  console.log(isLoggedInApp);


  return (
    <div className="app">
      
      <Header isLogged={isLoggedInApp} isConnected={userConnected} isDisconnected={userDisconnected}/>
      <Search />
      <Results />
      <Product />
      <Footer /> 
      <LoginForm isLogged={isLoggedInApp} isConnected={userConnected} />
    
    </div>
  );
}

// == Export
export default App;
