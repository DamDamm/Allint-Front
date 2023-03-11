import LoginForm from '../LoginForm';
import InscriptionForm from '../InscriptionForm';
import Header from '../Header';

// On n'oublie pas de destructurer les props pour les utiliser
const Login = ({ isLogged, isConnected }) => (
  <div>
    <Header />
    <LoginForm isLogged={isLogged} isConnected={isConnected} />
    <InscriptionForm />
  </div>
);

export default Login;
