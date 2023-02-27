import { useNavigate } from 'react-router-dom';
import './styles.scss';
import ProfileForm from '../ProfileForm';

const Profil = () => {

  const navigate = useNavigate();

   /* const handleSubmitClick = (event) => {
    event.preventDefault();
    navigate('/');
    console.log(event);
    // Fonction d'envoi des données au BACKEND (POST ou UPDATE)
  }; */

  return (
    <ProfileForm
      // handleClick={handleSubmitClick}
    />
  );
};

export default Profil;
