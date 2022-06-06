import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Invoice from './pages/invoice';
import Invoices from './pages/invoices';







function App() {
  return (
    <>
      <Routes>
        <Route path="/invoice/:id" element={<Invoice />} />
        <Route path="/" element={<Invoices />} />
      </Routes>

    </>
  );
}

export default App;
