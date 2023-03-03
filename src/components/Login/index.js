import LoginForm from '../LoginForm';
import ProfileForm from '../ProfileForm';
import Footer from '../Footer';

//On n'oublie pas de destructurer les props pour les utiliser
const Login = ({ isLogged, isConnected }) => {
  return (
    <div>
      <LoginForm isLogged={isLogged} isConnected={isConnected} />
      <ProfileForm />
      <Footer />
    </div>
  );
};

export default Login;