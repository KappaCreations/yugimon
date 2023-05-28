import React from "react";
import { Container, Box, Typography } from "@mui/material";

const Card = () => {
  const cardWidth = "calc(66.6667vh * 2 / 3)"; // Two-thirds of the viewport height
  const cardHeight = "66.6667vh"; // Set the desired height of the card
  const maxWidth = `calc((100vh * 2 / 3) / 1.425)`; // Two-thirds of the viewport width divided by the aspect ratio (1.425)

  return (
    <Container fixed>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: cardWidth,
            height: cardHeight,
            maxWidth: maxWidth,
            backgroundColor: '#1d1d1d',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transform: 'scale(1.5)', // Adjust the scaling factor as needed
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '80%',
              height: '80%',
              backgroundColor: '#2c2c2c',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '10px',
            }}
          >
            <Typography variant="h5" color="text.primary" sx={{ fontFamily: 'Arial', marginTop: '10px', color: '#ffffff', backgroundColor: '#2c2c2c', padding: '5px' }}>
              Card Name
            </Typography>
            <Box
              sx={{
                width: '70%',
                height: '70%',
                backgroundColor: '#555555',
              }}
            />
            <Typography variant="body1" color="text.secondary" sx={{ fontFamily: 'Arial', marginTop: '5px', color: '#ffffff' }}>
              Card Description
            </Typography>
            {/* Additional card details can be added here */}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Card;
