import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

//We get the Header props and pass it in the Profil
const Profil = ({isLogged}) => {

    return (
        <Link to ='/profil'>
        {isLogged && <button className='header-profil'> Profil </button> /* if user connected, the profil button appears  */}
        </Link>
    )
}

Profil.propTypes = {
    isLogged: PropTypes.string,
   };


export default Profil;