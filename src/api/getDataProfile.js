import { useState } from 'react';
import axiosInstance from './index';

const getDataProfile = (endpoint) => {
  const [dataGet, setDataGet] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const get = async (formData) => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.get(endpoint, formData);
      setDataGet(response.data);
      console.log(response.data);
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
