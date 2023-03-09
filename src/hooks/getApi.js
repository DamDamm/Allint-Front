import { useState, useEffect } from 'react';
import axiosInstance from './index';

const getApi = (endpoint) => {
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axiosInstance.get(endpoint)
      .then(({ data }) => setProductsData(data))
      .catch(console.error).finally(() => setLoading(false));

    return {
      productsData, loading,
    };
  }, []);
};

export default getApi;
