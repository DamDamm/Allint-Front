import './styles.scss'

import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>

                <Link to ='apropos'>
                    <h1 className='footer-btns'>A propos</h1>
                </Link>

                <Link to='nouscontacter'>
                    <h1 className='footer-btns'>Nous contacter</h1>
                </Link>

                <Link to ='cgu'>
                    <h1 className='footer-btns'>CGU</h1>
                </Link>

                <Link to ='mentionslegales'>
                    <h1 className='footer-btns'>Mentions Légales</h1>
                </Link>

        </div>
    )
};

export default Footer;