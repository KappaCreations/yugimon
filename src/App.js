import { React} from "react";
import { Container,Box,Grid, colors } from "@mui/material";
import './app.css';
import Header from './components/global/header';
import Footer from './components/global/footer';
import Blender from './components/interactive/blender';


function App() {
  return (
    
   <Container disableGutters fixed>
      <Header/>
      <Blender/>
   </Container>
   
  );
}

export default App;
