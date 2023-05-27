import React from "react";
import { Container,Box, Typography } from "@mui/material";

const Header = () => {

    return(
        <Container fixed >
            <Box sx={{ bgcolor:'yellow', border:5, borderRadius:5, borderColor:'lightBlue'}} >
             <Typography variant="h2" color={'Black'} sx={{ fontFamily:'"Dela Gothic One", cursive'}} >
                Yugi-oh Pokemon Blender
            </Typography> 
            </Box>
        </Container>
            
    )


}

export default Header;