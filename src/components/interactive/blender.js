import React, { useState } from 'react';
import { Grid, Container, Box, Typography, Button, Fab } from '@mui/material';
import useFetchapi from '../hooks/apifetch';
import GeneratorBox from './generatorBox';

const Blender = () => {
  const pokeApi = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  const yugiApi = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

//   const [pokemon, setPokemon] = useState(null);
//   const { data: pokeData, loading: pokeLoading, fetchRandomMon: fetchRandomMon1 } = useFetchapi(pokeApi);
//   const { data: yugiData, loading: yugiLoading, fetchRandomMon: fetchRandomMon2 } = useFetchapi(yugiApi);

//   const handleRandomPokemon = () => {
//     fetchRandomMon1();
//   };

//   const handleRandomDuelMonster = () => {
//     fetchRandomMon2();
//   };

//   const handleSavePokemon = () => {
//     const randomIndex = Math.floor(Math.random() * pokeData.length);
//     setPokemon(pokeData[randomIndex]);
//   };

//   const handleSaveDuel = () => {
//     const randomIndex = Math.floor(Math.random() * yugiData.length);
//     setPokemon(yugiData[randomIndex]);
//   };

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
