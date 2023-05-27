import React, { useState } from 'react';
import { Grid, Container, Box, Typography, Button, Fab } from '@mui/material';
import useFetchapi from '../hooks/apifetch';
import GeneratorBox from './generatorBox';

const Blender = () => {
  const pokeApi = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  const yugiApi = 'https://api.gwent.one/?key=data&response=json&version=3.0.0';


  return (
    <Grid container spacing={3} sx={{ padding: '10px' }}>
      <Grid item xs={6}>
        <Container sx={{ bgcolor: 'white', height: '70vh', border: 10, borderRadius: '10px', padding: '0px' }}>
         <GeneratorBox name={'Pokemon'} url={pokeApi}/>
        </Container>
      </Grid>

      <Grid item xs={6}>
        <Container sx={{ bgcolor: 'white', height: '70vh', border: 10, borderRadius: '10px', padding: '0px' }}>
        <GeneratorBox name={'YuGi-Oh'} url={yugiApi}/>
        </Container>
      </Grid>
    </Grid>
  );
};

export default Blender;
