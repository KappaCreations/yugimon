import React from "react";
import Paper from '@mui/material/Paper';
import { Grid,Container,Box, Typography } from "@mui/material";


  
const Blender = () => {

    return(
        <div >
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Container sx={{bgcolor:'white',height:'70vh'}}>
                <Typography variant="h4" sx={{bgcolor:'white', fontFamily:'"Dela Gothic One", cursive', textAlign:'center',}}>
                Pokemon
                </Typography>
            </Container>
          </Grid>

          <Grid item xs={6}>
            <Container sx={{bgcolor:'white',height:'70vh'}}>
                <Typography variant="h4" sx={{bgcolor:'white', fontFamily:'"Dela Gothic One", cursive', textAlign:'center',}}>
                YuGi-Oh
                </Typography>
            </Container>
          </Grid>
        </Grid>
      </div>




        // <Container fixed>
        //     <Grid container  spacing={2} >
        //     <Grid item xs={6} style={{background:'white', height:'70vh', padding:30, alignContent:'center', justifyContent:'center'}}>
        //     <item>
        //     <Typography  sx={{bgcolor:'white', fontFamily:'"Dela Gothic One", cursive', textAlign:'center'}}>
        //         Pokemon
        //     </Typography>
        //     </item>
        //     </Grid>
            
        //     <Grid item xs={6} style={{background:'white', height:'70vh', padding:30, alignContent:'center', justifyContent:'center'}}>
        //     <item>
                
        //     </item>
        //     </Grid>
        // </Grid>
        // </Container>
        
    
    )


}

export default Blender;