import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


//We get the Header props and pass it in the Connexion
const Connexion = ({isLogged}) => {
    

   return (
        <Link to ='/connexion'>
        {!isLogged && <button className='header-connexion'> Connexion </button> /* if user deconnected, the button appears  */}
        </Link>
    )
}

Connexion.propTypes = {
    isLogged: PropTypes.bool,
   };


export default Connexion;