import LoginForm from '../LoginForm';
import ProfileForm from '../ProfileForm';
import Header from '../Header';

// On n'oublie pas de destructurer les props pour les utiliser
const Login = ({ isLogged, isConnected }) => (
  <div>
    <Header />
    <LoginForm isLogged={isLogged} isConnected={isConnected} />
    <ProfileForm />
  </div>
);

export default Login;
