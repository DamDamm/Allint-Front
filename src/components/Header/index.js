import Profil from "./Profil";
import Connexion from "./Connexion";
import Deconnexion from "./Deconnexion";

//We get the LoginForm props and pass it in the header
const Header = ({isLogged}) => {

    return (
        <header className="header">
            <img />
                <Profil isLogged={isLogged}/>
                <Connexion isLogged={isLogged} /*We pass the props in Connexion element */ /> 
                <Deconnexion /> 
        </header>
    )
};

export default Header;