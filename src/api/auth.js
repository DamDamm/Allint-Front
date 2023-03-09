import axios from 'axios';

// Suppression du token du stockage local (lors de la deconnexion)
export const removeToken = () => {
  localStorage.removeItem('token')
};

// Stockage du token dans le stockage local
export const setToken = (token) => {localStorage.setItem('token', token)
};

// Récupération du token depuis le stockage local (afin de le redistribuer ensuite)
export const getToken = () => {return localStorage.getItem('token')
};

// Création d'une instance Axios avec le token en-tête
export const getApi = (token) => {
  const headers = token && { Authorization: `Bearer ${token}` };

  return axios.create({
    baseURL: 'https://repo-back2-production.up.railway.app/',
    headers,
  });
};

//checker le loginForm
// Dans la function handleSubmit