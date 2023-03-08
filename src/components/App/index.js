// == Import
import './styles.css';
import { useState } from 'react';

// Axios
import axios from 'axios';

// Router
import { Routes, Route } from 'react-router-dom';

// Components
import Product from 'src/components/Product';
import Home from '../Home';
import Login from '../Login';
import Profil from '../Profil';
import Footer from '../Footer';
import Apropos from '../Apropos';
import NousContacter from '../NousContacter';
import MentionsLegales from '../MentionsLegales';
import Cgu from '../Cgu';
import Error from '../Error';

// == App
const App = () => {
  const [product, setProduct] = useState(''); // select a product from option list
  const [productResult, setProductResult] = useState(''); // corresponding data to selected product

  const [isLoggedInApp, setIsLoggedInApp] = useState(); // Initialize isLoggedInApp to Undefined.

  const userConnected = () => {
    setIsLoggedInApp(true); // Update isLoggedInApp in true when user connected
  };

  const userDisconnected = () => {
    setIsLoggedInApp(false); // Update isLoggedInApp in true when user disconnected
  };

  console.log(isLoggedInApp);

  return (
    <div className="app">

      <Routes>
        <Route
          exact
          path="/"
          element={(
            <Home
              product={product}
              setProduct={setProduct}
              productResult={productResult}
              setProductResult={setProductResult}
              isLogged={isLoggedInApp}
              isConnected={userConnected}
              isDisconnected={userDisconnected}
            />
        )}
        />
        <Route exact path="/connexion" element={<Login isLogged={isLoggedInApp} isConnected={userConnected} />} />
        <Route exact path="/profil" element={<Profil isLogged={isLoggedInApp} isConnected={userConnected} isDisconnected={userDisconnected} />} />
        <Route exact path="/product/:id" element={<Product isLogged={isLoggedInApp} isConnected={userConnected} isDisconnected={userDisconnected} />} />
        <Route exact path="/*" element={<Error isLogged={isLoggedInApp} isConnected={userConnected} isDisconnected={userDisconnected} />} />
        <Route exact path="/mentionslegales" element={<MentionsLegales isLogged={isLoggedInApp} isConnected={userConnected} isDisconnected={userDisconnected} />} />
        <Route exact path="/apropos" element={<Apropos isLogged={isLoggedInApp} isConnected={userConnected} isDisconnected={userDisconnected} />} />
        <Route exact path="/nouscontacter" element={<NousContacter isLogged={isLoggedInApp} isConnected={userConnected} isDisconnected={userDisconnected} />} />
        <Route exact path="/cgu" element={<Cgu isLogged={isLoggedInApp} isConnected={userConnected} isDisconnected={userDisconnected} />} />
      </Routes>
      <Footer />

    </div>
  );
};

// == Export
export default App;
