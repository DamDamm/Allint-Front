import PropTypes from 'prop-types';
import Page from "../Page";
import Header from "../Header";

// Destructuring props to use them
const Cgu = ({ isLogged, isConnected, isDisconnected }) => {
    return (
        <Page>
            <Header isLogged={isLogged} isConnected={isConnected} isDisconnected={isDisconnected}/>
            <div>
                <h1> Ceci est la page qui va montrer les conditions générales d'utilisation </h1>
            </div>
        </Page>
    )
};

Cgu.propTypes = {
    isLogged: PropTypes.bool, 
    isConnected: PropTypes.func,
    isDisconnected:PropTypes.func,
   };
export default Cgu;