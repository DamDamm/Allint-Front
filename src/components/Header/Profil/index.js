import { Link } from 'react-router-dom'

const ProfilPage = (logged) => {

    return (
        <Link to ='/profil'>
        {logged && <button> Profil </button>}
        </Link>
    )
}

export default ProfilPage;