import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Deconnexion = ( {isLogged} ) => {

    return (
        <Link to ='/'>
        {isLogged && <button> Profil </button>}
        </Link>
    )
}

    Deconnexion.propTypes = {
    isLogged: PropTypes.bool, 
    changeAppStatus: PropTypes.func,
   };

export default Deconnexion;