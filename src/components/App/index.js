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



// == App
function App() {
  return (
    <div className="app">
      <Header />
      <Search />
      <Results />
      <Product />
      <Footer />
      

    </div>
  );
}

// == Export
export default App;
