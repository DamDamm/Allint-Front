
import Page from "../Page";
import Header from "../Header";
import PropTypes from 'prop-types';
import './styles.scss'

const Apropos = ({ isLogged, isConnected, isDisconnected }) => {
    return (
        <Page>
            <Header isLogged={isLogged} isConnected={isConnected} isDisconnected={isDisconnected}/>
        <div className='apropos'>
            <div className='card'>
                <img src='#' className='card-avatar'/>
                <p> NOM </p>
                <p> Prénom </p>
            </div>

            <div className='card'>
                <img src='#' className='card-avatar'/>
                <p> NOM </p>
                <p> Prénom </p>
            </div>

            <div className='card'>
                <img src='#' className='card-avatar'/>
                <p> NOM </p>
                <p> Prénom </p>
            </div>

            <div className='card'>
                <img src='#' className='card-avatar'/>
                <p> NOM </p>
                <p> Prénom </p>
            </div>

            <div className='card'>
                <img src='#' className='card-avatar'/>
                <p> NOM </p>
                <p> Prénom </p>
            </div>
        </div>
        </Page>
    )
};

Apropos.propTypes = {
    isLogged: PropTypes.string, 
    isConnected: PropTypes.func,
    isDisconnected:PropTypes.func,
   };
export default Apropos;