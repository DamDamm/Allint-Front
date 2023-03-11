import axios from 'axios';

// Suppression du token du stockage local (lors de la deconnexion)
export const removeToken = () => {
  localStorage.removeItem('token');
};

// Stockage du token dans le stockage local
export const setToken = (token) => {
  localStorage.setItem('token', token);
};

// Récupération du token depuis le stockage local (afin de le redistribuer ensuite)
export const getToken = () => {
  return localStorage.getItem('token');
};

export const getApi = () => {
  
  const headers = {}
  const token = getToken();
  console.log(token)
  if (token){
    headers.Authorization = `Bearer ${token}`
  }

  return axios.create({
    baseURL: 'https://repo-back2-production.up.railway.app/',
    headers: headers
  })





  // const getUsers = async (token) => {
  //   try {

  //     const headers = token && { Authorization: `Bearer ${token}` };
  //     const body = { /* objet contenant les paramètres de la requête POST */ };
  //     const response = await axios.post('https://repo-back2-production.up.railway.app/login', body, { headers });
  //     setData(response.data);
  //   } catch (err) {
  //     setError('Une erreur est survenue lors de la récupération des utilisateurs');
  //   }
  // };
  
  // return {
  //   data,
  //   error,
  //   getUsers,
  // };
  
};
