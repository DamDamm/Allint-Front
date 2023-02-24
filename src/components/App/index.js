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

  const [isLoggedInApp, setIsLoggedInApp] = useState(false);
  const userConnected = () => {
    setIsLoggedInApp(true)
  }
  console.log(isLoggedInApp)

  return (
    <div className="app">
      
      <Header />
      <Search />
      <Results />
      <Product />
      <Footer /> 
      <LoginForm isLogged={isLoggedInApp} changeAppStatus={userConnected}/>

    </div>
  );
}

// == Export
export default App;
