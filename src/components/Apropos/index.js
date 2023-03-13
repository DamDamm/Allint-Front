
import Page from "../Page";
import Header from "../Header";
import PropTypes from 'prop-types';
import './styles.scss'

import Batman from '../../assets/img/Batman.jpg';
import BlackWidow from '../../assets/img/BlackWidow.jpg';
import CaptainAmerica from '../../assets/img/CaptainAmerica.jpg';
import IronMan from '../../assets/img/IronMan.jpg';
import WonderWoman from '../../assets/img/WonderWoman.jpg';

const Apropos = ({ isLogged, isConnected, isDisconnected }) => {
    return (
        <Page>
            <Header isLogged={isLogged} isConnected={isConnected} isDisconnected={isDisconnected}/>
        <div className='apropos'>
            <div className='card'>
                <img src={BlackWidow} className='card-avatar'/>
                <div className="card-title">
                    <p> R.K </p>
                    <p> Tatiana </p>
                </div>
                    <h2 className="card-subtitle">Product Owner</h2>
            </div>
            
            <div className='card'>
                <img src={WonderWoman} className='card-avatar'/>
                <div className="card-title">
                    <p> KOUCEM </p>
                    <p> Mathilde </p>
                </div>
                    <h2 className="card-subtitle">Lead Dev</h2>
            </div>

            <div className='card'>
                <img src={Batman} className='card-avatar'/>
                <div className="card-title">
                    <p> LORD </p>
                    <p> Thibault </p>
                </div>
                    <h2 className="card-subtitle"> Git Master </h2>
            </div>

            <div className='card'>
                <img src={CaptainAmerica} className='card-avatar'/>
                <div className="card-title">
                    <p> POUPART </p>
                    <p> Geoffroy </p>
                </div>
                    <h2 className="card-subtitle">Scrum Master</h2>
            </div>


            <div className='card'>
                <img src={IronMan} className='card-avatar'/>
                <div className="card-title">
                    <p> VERDU  </p>
                    <p> Damien </p>
                </div>
                    <h2 className="card-subtitle">Technical Referent</h2>
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