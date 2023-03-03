import { useNavigate } from 'react-router-dom';
import './styles.scss';
import ProfileForm from '../ProfileForm';
import Header from '../Header';

const Profil = () => {


  const navigate = useNavigate();

   /* const handleSubmitClick = (event) => {

    event.preventDefault();
    navigate('/');
    console.log(event);
    // Fonction d'envoi des données au BACKEND (POST ou UPDATE)
  }; */

  return (
    <div>
      <Header />
      <ProfileForm
      // handleClick={handleSubmitClick}
      />
    </div>
  );
};

export default Profil;
