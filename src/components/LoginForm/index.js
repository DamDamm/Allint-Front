import PropTypes from 'prop-types';
import { useState } from 'react';

import usersData from 'src/data/MOCK_users.json';

const LoginForm = ({ isLogged }) => { 

  //Stock login and password in the state
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState(''); 

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
      console.log('Connexion réussie');
    } else {
      console.log('Email ou mot de passe incorrect');
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
        </form>
      ) : (
        <p>Veuillez vous connecter pour accéder à cette page.</p>
      )}
    </div>
  );
};

LoginForm.propTypes = {
  isLogged: PropTypes.bool, 
};


export default LoginForm;