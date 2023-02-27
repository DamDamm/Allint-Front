import './styles.scss';
import ProfileForm from '../ProfileForm';

const Profil = () => {
  const handleSubmitClick = (event) => {
    event.preventDefault();
    // Fonction d'envoi des données au BACKEND (POST ou UPDATE)
  };

  return (
    <ProfileForm
      handleClick={handleSubmitClick}
    />
  );
};

export default Profil;
