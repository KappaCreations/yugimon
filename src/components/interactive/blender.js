import React, {useEffect,useContext,useState} from 'react';
import { Grid, Container,Dialog, DialogTitle, DialogActions, Button} from '@mui/material';
import GeneratorBox from './generatorBox';
import { MonContext } from '../hooks/MonContext';
import { Link } from 'react-router-dom';


const Blender = () => {
  const pokeApi = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  const yugiApi = 'https://db.ygoprodeck.com/api/v7/cardinfo.php?type=Normal%20Monster';
  const {poke,setPoke,yugi,setYugi} = useContext(MonContext);
  const [dialogOpen, setDialogOpen] = useState(false);
  
  useEffect(() => {
    if (yugi !== null && poke !== null) {
        setDialogOpen(true);
      }
  }, [yugi, poke]);
  
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  
  return (
    <Grid container spacing={3} sx={{ padding: '10px' }}>
      
    <MonContext.Provider value={{poke,setPoke}}>
      <Grid item xs={6}>
        <Container sx={{ bgcolor: 'white', height: '80vh', border: 10, borderRadius: '10px', padding: '0px' }}>
         <GeneratorBox 
            name={'Pokemon'}
            url={pokeApi}
            contextValue={poke}
            setContextValue={setPoke}
        />
        </Container>
      </Grid>
    </MonContext.Provider>
    
    <MonContext.Provider value={{yugi,setYugi}}>
      <Grid item xs={6}>
        <Container sx={{ bgcolor: 'white', height: '80vh', border: 10, borderRadius: '10px', padding: '0px' }}>
        <GeneratorBox 
            name={'YuGi-Oh'}
            url={yugiApi}
            contextValue={yugi}
            setContextValue={setYugi}
        />
        </Container>
      </Grid>
    </MonContext.Provider>
        
    <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Select a Card</DialogTitle>
        <DialogActions>
          <Button component={Link} to="/card" onClick={handleCloseDialog}>
            Go to Card
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default Blender;
