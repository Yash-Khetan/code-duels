import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Landing from './pages/Landing';
import Dashboard from './pages/Dashboard';
import Arena from './pages/Arena';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/arena" element={<Arena />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
