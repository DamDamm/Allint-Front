import './styles.scss'

import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>

                <Link to ='apropos'>
                    <button className='footer-btns'>A propos</button>
                </Link>

                <Link to='nouscontacter'>
                    <button className='footer-btns'>Nous contacter</button>
                </Link>

                <Link to ='cgu'>
                    <button className='footer-btns'>CGU</button>
                </Link>

                <Link to ='mentionslegales'>
                    <button className='footer-btns'>Mentions Légales</button>
                </Link>

        </div>
    )
};

export default Footer;