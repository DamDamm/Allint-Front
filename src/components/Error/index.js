import PropTypes from 'prop-types';

import Page from '../Page'
import Header from '../Header'

import './styles.scss'

import Dumbo from '../../assets/img/Dumbo.gif';

// Destructuring props to use them
const Error = ( {isLogged, isConnected, isDisconnected} ) => {
    return (
        <Page>
            <Header isLogged={isLogged} isConnected={isConnected} isDisconnected={isDisconnected}/>
            <div className='error'>
                <img src={Dumbo} className='error-image' />
                <h1 className='error-title'> 404 </h1>
                <h2 className='error-subtitle'> Oups, Il semblerait que vous êtes allergiques à cette page ! </h2>
            </div>
        </Page>
    )
};

Error.propTypes = {
    isLogged: PropTypes.string, 
    isConnected: PropTypes.func,
    isDisconnected:PropTypes.func,
   };

export default Error;