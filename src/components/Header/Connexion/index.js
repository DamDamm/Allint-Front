import { Link } from 'react-router-dom'


const Connexion = (Logged) => {
   return (
        <Link to ='/connexion'>
        {!Logged && <button> Connexion </button>}
        </Link>
    )
}

export default Connexion;