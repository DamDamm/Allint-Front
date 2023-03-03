import { useNavigate } from 'react-router-dom';
import './styles.scss';
import ProfileForm from '../ProfileForm';
import Header from '../Header';
import Footer from '../Footer';

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
      <Footer />
    </div>
  );
};

export default Profil;
