import React from 'react';
import Navbar from './Navbar.jsx';
import Products from './Products.jsx';
import Footer from './Footer.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

export default function App() {
  return (
    <div>
      <Navbar/>
      <Products/>
      <Footer/>
    </div>
  )
}
