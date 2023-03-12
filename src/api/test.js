import { useState } from 'react';
import axiosInstance from './index';
import { getToken } from './auth';

const getDataProfile = (endpoint) => {
  const [userInfosData, setuserInfosData] = useState({});
  const [userAllergensData, setuserAllergensData] = useState([]);
  const [defaultAllergensData, setdefaultAllergensData] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const get = async () => {
    setIsLoading(true);
    const token = getToken();
    try {
      const { data } = await axiosInstance.get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setuserInfosData(data.userInfos);
      setuserAllergensData(data.userAllergens);
      setdefaultAllergensData(data.defaultAllergens);
      setIsLoading(false);
    }
    catch (err) {
      setError('Une erreur est survenue lors de la récupération de vos données');
      setIsLoading(false);
    }
  };

  return {
    userInfosData, userAllergensData, defaultAllergensData, error, isLoading, get,
  };
};

export default getDataProfile;