import { Link } from 'react-router-dom'

//We get the Header props and pass it in the Connexion
const Connexion = ({isLogged}) => {
    

   return (
        <Link to ='/connexion'>
        {!isLogged && <button> Connexion </button> /* if user deconnected, the button appears  */}
        </Link>
    )
}

export default Connexion;