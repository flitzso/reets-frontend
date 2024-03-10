import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from '../src/components/NavBar';
import LiveVideo from './pages/LiveVideo';
import Error404 from '../src/components/Error404';
import NoticesHead from '../src/components/NoticesHead';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/livevideo" element={<LiveVideo />} />
        <Route path="/error404" element={<Error404/>} />
        <Route path="/noticeshead" element={<NoticesHead/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;