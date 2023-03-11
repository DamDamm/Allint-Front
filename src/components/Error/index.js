import PropTypes from 'prop-types';

import Page from '../Page'
import Header from '../Header'

// Destructuring props to use them
const Error = ( {isLogged, isConnected, isDisconnected} ) => {
    return (
        <Page>
            <Header isLogged={isLogged} isConnected={isConnected} isDisconnected={isDisconnected}/>
            <div>
                <h1> Une erreur s'est produite </h1>
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