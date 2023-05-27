import { useState } from 'react';

const useFetchapi = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRandomMon = async () => {
    try {
      setLoading(true);

      const response = await fetch(url);
      const { results } = await response.json();
        
      setData(results);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
    
  };

  return { data, loading, fetchRandomMon };
};

export default useFetchapi;