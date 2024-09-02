import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from '../common/navbar/index.js';
import Home from '../pages/home/index.js';
import Footer from '../../src/common/footer/index.js'

const Main = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Main;
