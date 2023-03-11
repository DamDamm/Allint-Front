import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import Profil from './Profil';
import Connexion from './Connexion';
import Deconnexion from './Deconnexion';
import Search from '../Search';

import './styles.scss';
import logo from '../../assets/img/logo-allint.png';

// We get the LoginForm props and pass it in the header
const Header = ({ isLogged, isDisconnected }) => (
  <header className="header">

    <div className="header-nav">
      <Link to="/">
        <img src={logo} className="header-img" />
      </Link>

      <div className="header-nav_container">
        <Link to="/">
          <h1 className="header-nav_title">Accueil</h1>
        </Link>

        <NavHashLink to = "/#Search">
          <h1 className="header-nav_title">Rechercher un produit</h1>
        </NavHashLink>

        <Link to="/apropos">
          <h1 className="header-nav_title">Allint</h1>
        </Link>

      </div>
    </div>
    <div className="header-btns">
      <Profil isLogged={isLogged} /* We pass the props in Connexion element *//>
      {/* <Connexion   /> */}
      {/* <Deconnexion isDisconnected={isDisconnected}/> */}

      {isLogged ? <Deconnexion isDisconnected={isDisconnected} /> : <Connexion />}
    </div>
  </header>
);

export default Header;
