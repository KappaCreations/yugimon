import React from 'react';
import { Container } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './app.css';
import Header from './components/global/header';
import Footer from './components/global/footer';
import Blender from './components/interactive/blender';
import Card from './components/interactive/card';
import { MonContextProvider } from './components/hooks/MonContext';

function App() {
  return (
    <div style={{background:'#696969'}}>
    <BrowserRouter>
     <MonContextProvider>
      <Container disableGutters fixed sx={{ padding: '3px' }}>
        <Header />
        <Routes>
            <Route path="/" element={<Blender />} />
            <Route path="/card" element={<Card />} />
        </Routes>
      </Container>
     </MonContextProvider>
    </BrowserRouter>
  </div>
  );
}

export default App;