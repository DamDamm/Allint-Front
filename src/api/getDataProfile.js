import { useState } from 'react';
import axiosInstance from './index';
import { getToken } from './auth';

const getDataProfile = (endpoint) => {
  const [dataGet, setDataGet] = useState({
    userAllergens: [],
    defaultAllergens: [],
    userInfos: {
      lastName: '',
      firstName: '',
      email: '',
      role_id: '', // 2 = user, 1 = admin
    }
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const get = async () => {
    setIsLoading(true);
    try {
      const token = getToken();
      console.log("endpoit:", endpoint)
      const response = await axiosInstance.get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data)
      setDataGet(response.data);
      console.log(dataGet);
      setIsLoading(false);
    }
    catch (err) {
      setError("Une erreur est survenue lors de l'envoi de vos données");
      setIsLoading(false);
    }
  };

  return {
    dataGet, error, isLoading, get,
  };
};

export default getDataProfile;
