import React, { useState, useEffect } from 'react';
import { Box, Typography, Fab } from '@mui/material';
import useFetchapi from '../hooks/apifetch';

const GeneratorBox = (props) => {
  const [mon, setMon] = useState(null);
  const { data, loading, fetchRandomMon } = useFetchapi(props.url);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (data.length > 0) {
      const randomIndex = Math.floor(Math.random() * data.length);
      setMon(data[randomIndex]);
      if(mon !== null)
      {console.log(mon.name);
    }}
        
  }, []);

  const handleRandomMon = () => {
    fetchRandomMon();
  };

  const handleSaveMon = () => {
    setSelected(true);
  };

  return (
    <>
      <Box sx={{ bgcolor: 'red', height: '50px', border: 5, borderRadius: '10px', marginTop: '5px' }}>
        <Typography variant="h4" sx={{ fontFamily: '"Dela Gothic One", cursive', textAlign: 'center' }}>
          {props.name}
        </Typography>
      </Box>
      <Box sx={{ bgcolor: 'grey', height: 0.85, border: 5, borderRadius: '10px', marginTop: '5px', padding: '20px' }}>
        <Typography variant="h4" sx={{ fontFamily: '"Dela Gothic One", cursive', textAlign: 'center' }}>
          Click the button below to select a random {props.name}
        </Typography>
        <div>
          <Fab
            onClick={handleRandomMon}
            disabled={loading}
            variant="extended"
            size="large"
            sx={{ bgcolor: 'white', color: 'black' }}
          >
            {loading ? <h1>Loading...</h1> : <h4>Generate {props.name}</h4>}
          </Fab>
        </div>
        <div>
          {data.length === 0 ? (
            <>
            </>
          ) : (
            <>
              {!selected ? (
                <div>
                  {mon && mon.name && <h3>{mon.name}</h3>}
                  <Fab onClick={handleSaveMon} variant="extended" size="large" sx={{ bgcolor: 'white', color: 'black' }}>
                    Save {props.name}
                  </Fab>
                </div>
              ) : (
                <div>
                  <h3>{props.name} Selected:</h3>
                  {mon && mon.name && <p>{mon.name}</p>}
                </div>
              )}
            </>
          )}
        </div>
      </Box>
    </>
  );
};

export default GeneratorBox;
