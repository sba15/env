import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../../src/common/navbar/index.js'
import Home from '../pages/home/index.js';
import Footer from '../../src/common/footer/index.js';
import DataAI from "../../src/pages/dataAI/index.js";

const Main = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/DataAI' element={<DataAI />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Main;
