import PropTypes from 'prop-types';
import { useState } from 'react';

import 'src/LoginForm/style.scss';

import usersData from 'src/data/MOCK_users.json';

const LoginForm = ({ isLogged }) => { 

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
    } else {
      setResultConnexion('Email ou Mot de Passe invalide');
    }
  };

  return (
    <div>
      {!isLogged ? (
        <form className="form" onSubmit={handleSubmit}>
          <label>Entrez votre Email</label>
          <input
            type="email"
            name="email"
            placeholder="Adresse Email"
            value={login}
            onChange={handleChange}
          />
          <label>Entrez votre mot de passe</label>
          <input
            type="password"
            name="password"
            placeholder="Mot de Passe"
            value={password}
            onChange={handleChange}
          />
          <input type="submit" value="Connexion" />

          <p> {resultConnexion} </p>
        </form>

      ) : (
        <p> Veuillez vous connecter </p>
      )}
    </div>
  );
};

LoginForm.propTypes = {
  isLogged: PropTypes.bool, 
};


export default LoginForm;