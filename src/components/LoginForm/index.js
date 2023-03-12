import './styles.scss';

import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getApi, setToken } from '../../api/auth';

const LoginForm = ({ isLogged, isConnected }) => {
  const navigate = useNavigate();

  // Stock login, password and connexion result in the state
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [resultConnexion, setResultConnexion] = useState('');

  // Update when the state (email or password) change
  const handleChange = (event) => {
    if (event.target.name === 'email') {
      setLogin(event.target.value); // Email
    }
    else if (event.target.name === 'password') {
      setPassword(event.target.value); // Password
    }
  };

  // Function when submit form
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!login || !password) {
      console.log('Les deux champs sont requis');
      return;
    }
    const result = await getApi().post('/login', {
      email: login,
      password: password,
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    });
    const token = result.data;
    console.log(token);
    setToken(token);
    isConnected(token);
    navigate('/');
  };

  const connected = isLogged; // Stock the authentication props in a variable

  return (
    <div className="login">
      <h2 className="login-title"> Déjà venu ? </h2>

      {!connected && (
      <form className="login-form" onSubmit={handleSubmit}>

        <input
          className="login-input"
          type="email"
          name="email"
          placeholder="Adresse Email"
          value={login}
          onChange={handleChange}
        />

        <input
          className="login-input"
          type="password"
          name="password"
          placeholder="Mot de Passe"
          value={password}
          onChange={handleChange}
        />
        <div className="login-submit-div">
          <input type="submit" value="Se Connecter" className="login-submit" />
        </div>
      </form>
      )}
      <div className="login-horizontalbar" />
    </div>
  );
};

LoginForm.propTypes = {
  isLogged: PropTypes.string,
  isConnected: PropTypes.func,
};

export default LoginForm;
