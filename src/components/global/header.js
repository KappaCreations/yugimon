import React from "react";
import { Container,Box, Typography } from "@mui/material";


const Header = () => {

    return(
        <Container fixed>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: 25,
            bgcolor: 'yellow',
            border: 5,
            borderRadius: 5,
            borderColor: 'lightBlue',
            padding: '10px',
          }}
        > 
          <Typography variant="h3" color={'black'} sx={{ fontFamily: '"Dela Gothic One", cursive' }}>
            Yugi-oh Pokemon Blender
          </Typography>
        </Box>
      </Container>
  );
};

export default Header;