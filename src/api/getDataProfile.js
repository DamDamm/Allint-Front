import { useState, useEffect } from 'react';
import axiosInstance from './index';
import { getToken } from './auth';

const getDataProfile = (endpoint) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const get = async () => {
    setIsLoading(true);
    console.log(isLoading);
    try {
      const token = getToken();
      const response = await axiosInstance.get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data.defaultAllergens);
      setData(response.data);
      console.log(data);
      setIsLoading(false);
      console.log(isLoading);
    }
    catch (err) {
      setError("Une erreur est survenue lors de l'envoi de vos données");
      setIsLoading(false);
    }
  };

  return {
    data, error, isLoading, get,
  };
};

export default getDataProfile;
