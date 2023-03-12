import { useState } from 'react';
import axiosInstance from './index';
import { getToken } from './auth';

const patchDataProfile = (endpoint) => {
  const [patchData, setData] = useState('');
  const [patchError, setError] = useState('');
  const [patchIsLoading, setIsLoading] = useState(false);

  const patch = async (formData) => {
    setIsLoading(true);
    const token = getToken();
    try {
      const response = await axiosInstance.patch(endpoint, formData, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${token}`,
        },
      });
      setData(response.data);
      setIsLoading(false);
    }
    catch (err) {
      setError('Une erreur est survenue lors de la mise à jour de vos données');
      setIsLoading(false);
    }
  };

  return {
    patchData, patchError, patchIsLoading, patch,
  };
};

export default patchDataProfile;
