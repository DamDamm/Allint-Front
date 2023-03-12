import { useState } from 'react';
import axiosInstance from './index';
import { getToken } from './auth';

const getDataProduct = (endpoint) => {

  const [productData, setProductData] = useState([]);
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
      setProductData(data.product);
      setIsLoading(false);
    }
    catch (err) {
      setError('Une erreur est survenue lors de la récupération de vos données');
      setIsLoading(false);
    }
  };

  return {
    productData, error, isLoading, get,
  };
};

export default getDataProduct;