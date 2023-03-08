import axios from 'axios';
import { useState, useEffect } from 'react';

const axiosInstance = axios.create({
  baseURL: 'https://projet-08-allint-back-production.up.railway.app',
});

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
