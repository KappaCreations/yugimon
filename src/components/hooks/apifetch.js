import { useState } from 'react';

const useFetchapi = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  var hasMounted = false;

  const fetchRandomMon = async () => {
    if(url !== null)
    {
        hasMounted=true;
    }
    
    
    if(hasMounted )
    {
        try {
      setLoading(true);

      const response = await fetch(url);
      const { results } = await response.json();

      // Check if the results are undefined
      if (results === undefined) 
      {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            const jsonResult = JSON.parse(xhr.responseText);
            setData(jsonResult.data);
            setLoading(false);
          } 
            else {
            console.error('Error fetching data:', xhr.statusText);
            setLoading(false);
          }
        };
        xhr.send();
      } 
        else {
        setData(results);
        setLoading(false);
      }
    } 
    catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  }



};
  return { data, loading, fetchRandomMon };
}


;

export default useFetchapi;