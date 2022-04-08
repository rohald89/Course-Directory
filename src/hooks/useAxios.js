import { useState, useEffect } from 'react';
import axios from 'axios';

import { useUser } from '../Context';

const baseUrl = 'http://localhost:5000/api/';

const useAxios = path => {
  const { authenticatedUser } = useUser();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async (path, method = 'GET') => {
      setLoading(true);
      try {
        const response = await axios({
          method,
          url: `${baseUrl}${path}`,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic ${btoa(
              `${authenticatedUser.emailAddress}:${authenticatedUser.password}`
            )}`,
          },
          data,
          cancelToken: source.token,
        });
        if (isMounted) {
          setData(response.data);
          setErrors([]);
        }
      } catch (err) {
        if (isMounted) {
          setErrors(err.message);
          setData([]);
        }
      } finally {
        isMounted && setLoading(true);
      }
    };
    fetchData(path);

    const cleanUp = () => {
      console.log('clean up function');
      isMounted = false;
      source.cancel();
    };
    return cleanUp;
  }, [path]);

  return { data, loading, errors };
};
export default useAxios;
