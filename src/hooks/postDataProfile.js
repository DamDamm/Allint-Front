import axios from 'axios';
import { useState } from 'react';

const postDataProfile = (url) => {
  const [data, setData] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const post = async (formData) => {
    setIsLoading(true);
    try {
      const response = await axios.post(url, formData);
      setData(response.data);
      setIsLoading(false);
    }
    catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  return {
    data, error, isLoading, post,
  };
};

export default postDataProfile;
