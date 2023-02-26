import Profil from "./Profil";
import Connexion from "./Connexion";
import Deconnexion from "./Deconnexion";

//We get the LoginForm props and pass it in the header
const Header = ({isLogged, isDisconnected}) => {

    return (
        <header className="header">
            <img />
                <Profil isLogged={isLogged} /*We pass the props in Connexion element *//> 
                <Connexion isLogged={isLogged} /*We pass the props in Connexion element */ /> 
                <Deconnexion isLogged={isLogged} isDisconnected={isDisconnected} /*We pass the props in Connexion element *//> 
        </header>
    )
};

export default Header;