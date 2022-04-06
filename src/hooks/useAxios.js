import axios from 'axios';
import { useState } from 'react';
import { useUser } from '../Context';

const baseUrl = 'http://localhost:5000/api/';

const useAxios = () => {
  const { authenticatedUser } = useUser();
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const fetchData = async (method, path, data = null) => {
    setLoading(true);
    await axios({
      method,
      url: `${baseUrl}${path}`,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${btoa(
          `${authenticatedUser.emailAddress}:${authenticatedUser.password}`
        )}`,
      },
      data,
    });

    return setLoading(false);
  };

  return { response, loading, errors };
};
export default useAxios;
