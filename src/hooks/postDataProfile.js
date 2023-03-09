import { useState } from 'react';
import axiosInstance from './index';

const postDataProfile = (endpoint) => {
  const [data, setData] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const post = async (formData) => {
    console.log(formData);
    setIsLoading(true);
    try {
      const response = await axiosInstance.post(endpoint, formData);
      setData(response.data);
      console.log(`data de reponse: ${response.data}`);
      setIsLoading(false);
    }
    catch (err) {
      setError("Une erreur est survenue lors de l'envoi de vos données");
      setIsLoading(false);
    }
  };

  return {
    data, error, isLoading, post,
  };
};

export default postDataProfile;
