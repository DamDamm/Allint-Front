import { Link } from 'react-router-dom'

const Deconnexion = (isLogged) => {
    return (
        <Link to ='/'>
        {isLogged && <button> Deconnexion </button>}
        </Link>
    )
}

export default Deconnexion;

