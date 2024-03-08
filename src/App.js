import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../src/components/NavBar';
import LiveVideo from './pages/LiveVideo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/livevideo" element={<LiveVideo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;