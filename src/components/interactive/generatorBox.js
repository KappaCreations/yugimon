import React, { useState, useEffect } from 'react';
import { Box, Typography, Fab } from '@mui/material';
import useFetchapi from '../hooks/apifetch';

const GeneratorBox = ({ name, url, contextValue, setContextValue }) => {
  const [mon, setMon] = useState(null);
  const { data, loading, fetchRandomMon } = useFetchapi(url);

  useEffect(() => {
    if (data.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.length);
      setMon(data[randomIndex]);
    }
  }, [data]);

  const handleRandomMon = () => {
    fetchRandomMon();
  };

  const handleSaveMon = () => {
    setContextValue(mon);
  };

  return (
    <>
      <Box sx={{ boxShadow: 2, bgcolor: 'red', height: '50px', border: 5, borderRadius: '10px', marginTop: '5px' }}>
        <Typography variant="h4" sx={{ fontFamily: '"Dela Gothic One", cursive', textAlign: 'center' }}>
          {name}
        </Typography>
      </Box>
      <Box sx={{ boxShadow: 12, bgcolor: 'grey', height: 0.85, border: 5, borderRadius: '10px', marginTop: '5px', padding: '20px' }}>
        <Typography variant="h4" sx={{ fontFamily: '"Dela Gothic One", cursive', textAlign: 'center' }}>
          Click the button below to select a random {name}
        </Typography>
        <div>
          <Fab
            onClick={handleRandomMon}
            disabled={loading}
            variant="extended"
            size="large"
            sx={{ bgcolor: 'white', color: 'black' }}
          >
            {loading ? <Typography variant="h7" sx={{ fontFamily: '"Dela Gothic One", cursive', textAlign: 'center' }}>Loading...</Typography> : 
            <Typography variant="h7" sx={{ fontFamily: '"Dela Gothic One", cursive', textAlign: 'center' }}>Generate {name}</Typography>}
          </Fab>
        </div>
        <div>
          {data.length === 0 ? (
            <>
            </>
          ) : (
            <Box sx={{ boxShadow: 12,bgcolor: 'red', height: '140px', border: 5, borderRadius: '10px', marginTop: '15px' }}>
              {!contextValue ? (
                <div>
                  {mon && mon.name && <Typography variant="h4" sx={{ fontFamily: '"Dela Gothic One", cursive', textAlign: 'center' }}>{mon.name}</Typography>}
                  <Fab onClick={handleSaveMon} variant="extended" size="large" sx={{ bgcolor: 'white', color: 'black' , marginTop:2}}>
                  <Typography variant="h7" sx={{ fontFamily: '"Dela Gothic One", cursive', textAlign: 'center' }}> Save {name} </Typography>
                  </Fab>
                </div>
              ) : (
                <div>
                  <Typography variant="h6" sx={{ fontFamily: '"Dela Gothic One", cursive', textAlign: 'center',justifyContent:'center' }}>{name} Selected:</Typography>
                  {mon && mon.name && <Typography variant="h4" sx={{ fontFamily: '"Dela Gothic One", cursive', textAlign: 'center' }}>{mon.name}</Typography>}
                </div>
              )}
            </Box>
          )}
        </div>
      </Box>
    </>
  );
};

export default GeneratorBox;