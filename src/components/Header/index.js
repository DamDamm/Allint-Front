import Profil from "./Profil";
import Connexion from "./Connexion";
import Deconnexion from "./Deconnexion";

import { Link } from "react-router-dom";

import './styles.scss'

//We get the LoginForm props and pass it in the header
const Header = ({isLogged, isDisconnected}) => {

    return (
        <header className="header">
            
            <Link to="/">
            <img src="#" className="header-img"/>
            </Link>

            <div className="header-btns">
                <Profil isLogged={isLogged} /*We pass the props in Connexion element *//> 
                <Connexion isLogged={isLogged} /*We pass the props in Connexion element */ /> 
                <Deconnexion isLogged={isLogged} isDisconnected={isDisconnected} /*We pass the props in Connexion element *//> 
            </div>
        </header>
    )
};

export default Header;