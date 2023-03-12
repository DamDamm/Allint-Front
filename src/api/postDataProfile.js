import { useState } from 'react';
import axiosInstance from './index';

const postDataProfile = (endpoint) => {
  const [postData, setData] = useState('');
  const [postError, setError] = useState('');
  const [postIsLoading, setIsLoading] = useState(false);

  const post = async (formData) => {
    setIsLoading(true);
    try {
      const response = await axiosInstance.post(endpoint, formData, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      });
      setData(response.data);
      setIsLoading(false);
    }
    catch (err) {
      setError("Une erreur est survenue lors de l'envoi de vos données");
      setIsLoading(false);
    }
  };

  return {
    postData, postError, postIsLoading, post,
  };
};

export default postDataProfile;
