import PropTypes from 'prop-types';

import Page from '../Page';
import Header from '../Header';

// Destructuring props to use them
const MentionsLegales = ({isLogged, isConnected, isDisconnected}) => {
    return (
        <Page>
            <Header isLogged={isLogged} isConnected={isConnected} isDisconnected={isDisconnected}/>
                <div>
                    <p>Ce site n'équivaut pas à un avis médical</p>
                </div>
        </Page>
    ) 
};

MentionsLegales.propTypes = {
    isLogged: PropTypes.bool, 
    isConnected: PropTypes.func,
    isDisconnected:PropTypes.func,
   };
export default MentionsLegales;