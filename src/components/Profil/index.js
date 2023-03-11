import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';
import './styles.scss';
import ProfileForm from '../ProfileForm';
import Header from '../Header';
import Page from '../Page';
import CustomAllergyInput from './CustomAllergyInput';

// Destructuring props to use them
const Profil = ({ isLogged, isConnected, isDisconnected }) => {
  const navigate = useNavigate();

  /* const handleSubmitClick = (event) => {

    event.preventDefault();
    navigate('/');
    console.log(event);
    // Fonction d'envoi des données au BACKEND (POST ou UPDATE)
  }; */

  const connected = isLogged;

  return (

    <Page>
      <Header isLogged={isLogged} isConnected={isConnected} isDisconnected={isDisconnected} />
      {connected ? (
        <div>
          <ProfileForm />
          <CustomAllergyInput />
        </div>
      ) : (
        <p>Veuillez vous connecter afin d'acceder à votre profil</p>
      )}
    </Page>

  );
};

Profil.propTypes = {
  isLogged: PropTypes.bool,
  isConnected: PropTypes.func,
  isDisconnected: PropTypes.func,
};

export default Profil;
