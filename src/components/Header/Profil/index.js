import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

const Profil = ( {isLogged} ) => {

    return (
        <Link to ='/profil'>
        {isLogged && <button> Profil </button>}
        </Link>
    )
}

    Profil.propTypes = {
    isLogged: PropTypes.bool, 
    changeAppStatus: PropTypes.func,
   };

export default Profil;