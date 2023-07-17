import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Pages/Footer";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Gallery from "./Pages/Gallery";
import ContactUs from "./Pages/ContactUs";
import ScrollToTop from 'react-scroll-to-top';
import {BsChevronDoubleUp} from 'react-icons/bs'
import NavBar from './components/header/Navbar';


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
      
        <Route path="/" element={<Home />}  />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
     
      <Footer />
      <ScrollToTop smooth top={300} component={<BsChevronDoubleUp/>} style={{backgroundColor:'#db4744' ,color:'#fff', fontSize:'18px'}} />
    </BrowserRouter>
  );
}

export default App;
