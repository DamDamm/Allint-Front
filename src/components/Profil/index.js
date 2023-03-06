import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';
import './styles.scss';
import ProfileForm from '../ProfileForm';
import Header from '../Header';
import Page from '../Page';

// Destructuring props to use them
const Profil = ({ isLogged, isConnected, isDisconnected }) => {

  console.log(isLogged);

  const navigate = useNavigate();

   /* const handleSubmitClick = (event) => {

    event.preventDefault();
    navigate('/');
    console.log(event);
    // Fonction d'envoi des données au BACKEND (POST ou UPDATE)
  }; */

  return (

    <Page>
      <Header isLogged={isLogged} isConnected={isConnected} isDisconnected={isDisconnected}/>
    <div>
      <ProfileForm
      // handleClick={handleSubmitClick}
      />
    </div>
    </Page>
    
  );
};

Profil.propTypes = {
  isLogged: PropTypes.bool, 
  isConnected: PropTypes.func,
  isDisconnected:PropTypes.func,
 };

export default Profil;
