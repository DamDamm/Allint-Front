import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';
import Profil from './Profil';
import Connexion from './Connexion';
import Deconnexion from './Deconnexion';


import './styles.scss';
import logo from '../../assets/img/logo-allint.png';

// We get the LoginForm props and pass it in the header
const Header = ({ isLogged, isDisconnected }) => (
  <header className="header">

    <div className="header-nav">
      <NavHashLink to = "/#Intro">
        <img src={logo} className="header-img" />
      </NavHashLink>

      <div className="header-nav_container">
        <NavHashLink to = "/#Intro">
          <h1 className="header-nav_title">Accueil</h1>
        </NavHashLink>

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
