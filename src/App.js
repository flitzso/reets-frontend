import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from '../src/components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;