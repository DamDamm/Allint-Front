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
import Login from '../Login';
import LoginForm from '../LoginForm';
import Profil from '../Profil';
import MentionsLegales from '../MentionsLegales';
import Apropos from '../Apropos';
import Cgu from '../cgu';

import { Routes, Route } from 'react-router-dom';



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
    <div className="app">

        <Header isLogged={isLoggedInApp} isConnected={userConnected} isDisconnected={userDisconnected}/>
        <Routes >
          
          <Route exact path='/' element={<> 
          <Search product={product}
          setProduct={setProduct}
          productResult={productResult}
          setProductResult={setProductResult}/>
          <Results productResult={productResult} />
          </>}/>
          
          <Route exact path='/connexion' element={<Login isLogged={isLoggedInApp} isConnected={userConnected}/>} />
          
          <Route exact path='/profil' element={<Profil />} />
          <Route exact path='/product/:id' element={<Product />} />
          <Route exact path='/*' element={<Error />} />
          <Route exact path ='/mentionslegales' element={<MentionsLegales/>} />
          <Route exact path ='/apropos' element={<Apropos/>} />
          <Route exact path ='/cgu' element={<Cgu/>} />
          
        </Routes>
      <Footer/>


    </div>
  );
}

// == Export
export default App;
