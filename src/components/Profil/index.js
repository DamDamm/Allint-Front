import PropTypes from 'prop-types';

import { useNavigate } from 'react-router-dom';
import Page from '../Page';
import Header from '../Header';
import ProfileForm from './ProfileForm';
import CustomAllergyInput from './CustomAllergyInput';
import './styles.scss';

// Destructuring props to use them
const Profil = ({ isLogged, isConnected, isDisconnected }) => {
  const navigate = useNavigate();

  const handleSubmitClick = (event) => {
    event.preventDefault();
    navigate('/');
    // Fonction d'envoi des données au BACKEND (POST ou UPDATE)
  };

  const connected = isLogged;

  return (

    <Page>
      <Header isLogged={isLogged} isConnected={isConnected} isDisconnected={isDisconnected} />
      {connected ? (
        <div className="profile__container">
          <ProfileForm />
          <CustomAllergyInput />
          <div className="action-button">
            <button className="action-button__delete" disabled type="submit">Supprimer votre joli profil</button>
            <button className="action-button__save" type="submit" onClick={handleSubmitClick}>Enregistrer tout ça</button>
          </div>
        </div>
      ) : (
        <p>Veuillez vous connecter afin d'acceder à votre profil</p>
      )}
    </Page>

  );
};

Profil.propTypes = {
  isLogged: PropTypes.string,
  isConnected: PropTypes.func,
  isDisconnected: PropTypes.func,
};

export default Profil;
