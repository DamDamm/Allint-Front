import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            
            <Link to ='apropos'>
                <button>A propos</button>
            </Link>

            <Link to='nouscontacter'>
                <button>Nous contacter</button>
            </Link>

            <Link to ='cgu'>
                <button>CGU</button>
            </Link>

            <Link to ='mentionslegales'>
                <button>Mentions Légales</button>
            </Link>

        </div>
    )
};

export default Footer;