import { useState } from 'react';
import axiosInstance from './index';
import { getToken } from './auth';

const getDataProfile = (endpoint) => {
  // LET MOCHE
  const [userInfos, setuserInfos] = useState({});
  const [userAllergens, setuserAllergens] = useState([]);
  const [defaultAllergens, setdefaultAllergens] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const get = () => {
    setIsLoading(true);
    const token = getToken();
    axiosInstance
      .get(endpoint, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        console.log(data.userInfos);
        setuserInfos(data.userInfos);
        setuserAllergens(data.userAllergens);
        setdefaultAllergens(data.defaultAllergens);
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
    // setData({ ...data, userInfos: response.data.userInfos });
    // MOCHE
    // data = response.data;
    // console.log(data);
    //   setIsLoading(false);

    // catch (err) {
    //   setError('Pas de chance');
    //   setIsLoading(false);
    // }
  };

  return {
    userInfos, userAllergens, defaultAllergens, error, isLoading, get,
  };
};

export default getDataProfile;
