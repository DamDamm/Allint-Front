import './styles.scss'

import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import usersData from 'src/data/MOCK_users.json';

const LoginForm = ({ isLogged, isConnected }) => { 

  const navigate = useNavigate();

  //Stock login, password and connexion result in the state
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [resultConnexion, setResultConnexion] = useState('');
 

  //Update when the state (email or password) change
  const handleChange = (event) => {
    if (event.target.name === 'email') { 
      setLogin(event.target.value); //Email
    } else if (event.target.name === 'password') {
      setPassword(event.target.value); //Password
    }
  };

 // Function when submit form
  const handleSubmit = (event) => {
    event.preventDefault();
    const user = usersData.find((u) => u.email === login); // Search user with Email
    if (user && user.password === password) { // Check if password is great
      setResultConnexion('Connexion réussie');
      isConnected(); //Call the isConnected function to change the global authentication status
      navigate('/'); //When the user is logged in, he is redirected to the home page
    } else {
      setResultConnexion('Email ou Mot de Passe invalide');
    }
  };
 
  const connected = isLogged; // Stock the authentication props in a variable
  

  return (
    <div className='login'>
      <h2 className='login-title'> Deja venu ? </h2>
      {!connected && (
        <form className="login-form" onSubmit={handleSubmit}>
          
          <input className='login-input'
            type="email"
            name="email"
            placeholder="Adresse Email"
            value={login}
            onChange={handleChange}
          />
          
          <input className='login-input' 
            type="password"
            name="password"
            placeholder="Mot de Passe"
            value={password}
            onChange={handleChange}
          />
          <div className='login-submit-div'>
          <input type="submit" value="Se Connecter" className='login-submit' />
          </div>
        </form>
      )}
      <div className='login-horizontalbar'></div>
    </div>
  );
};

 LoginForm.propTypes = {
  isLogged: PropTypes.bool, 
  isConnected: PropTypes.func,
 };


export default LoginForm;