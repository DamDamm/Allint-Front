import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

//We get the Header props and pass it in the Deconnexion Button
const Deconnexion = ( {isLogged} ) => {

    return (
        <Link to ='/'>
        {isLogged && <button> Deconnexion </button> /* if user connected, the button appears  */}
        </Link>
    )
}

export default Deconnexion;