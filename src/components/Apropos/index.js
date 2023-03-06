<<<<<<< HEAD
import PropTypes from 'prop-types';

import Page from "../Page";
import Header from "../Header";

// Destructuring props to use them
const Apropos = ({ isLogged, isConnected, isDisconnected }) => {
    return (
        <Page>
            <Header isLogged={isLogged} isConnected={isConnected} isDisconnected={isDisconnected}/>
            <div>
                <h1> Ceci est la page qui va montrer l'équipe de developpeurs </h1>
            </div>
        </Page>
=======
import './styles.scss'

const Apropos = () => {
    return (
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
>>>>>>> dev
    )
};

Apropos.propTypes = {
    isLogged: PropTypes.bool, 
    isConnected: PropTypes.func,
    isDisconnected:PropTypes.func,
   };
export default Apropos;