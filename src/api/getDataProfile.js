import { useState } from 'react';
import axiosInstance from './index';
import { getToken } from './auth';

const getDataProfile = (endpoint) => {
  // LET MOCHE
  let [gata, setData] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const get = async () => {
    setIsLoading(true);
    try {
      const token = getToken();
      const response = await axiosInstance.get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      // setData({ ...gata, userInfos: response.data.userInfos });
      // MOCHE
      gata = response.data;
      console.log(gata);
      setIsLoading(false);
    }
    catch (err) {
      setError('Pas de chance');
      setIsLoading(false);
    }
  };

  return {
    gata, error, isLoading, get,
  };
};

export default getDataProfile;
