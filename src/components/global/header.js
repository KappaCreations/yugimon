import React from "react";
import { Container,Box, Typography } from "@mui/material";

const Header = () => {

    return(
        <Container fixed >
            <Box sx={{ height: '15vh', }} >
             <Typography variant="h2" color={'Black'} sx={{bgcolor:'yellow', fontFamily:'"Dela Gothic One", cursive'}} >
                Yugi-oh Pokemon Blender
            </Typography> 
            </Box>
        </Container>
            
    )


}

export default Header;