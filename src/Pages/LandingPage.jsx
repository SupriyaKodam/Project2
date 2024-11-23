import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Home from '../Components/Home';
import Footer from '../Components/Footer';
import OurCollections from '../Components/OurCollections';
import LatestCollection from '../Components/LatestCollection';
import ContactUs from '../Components/ContactUs';
import AboutUs from '../Components/AboutUs';
import OrderNow from '../Components/OrderNow';

const LandingPage = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Define the main page route */}
          <Route 
            path="/" 
            element={
              <>
                <Home id="home"/>
                <OurCollections id="collections" />
                <LatestCollection id="collections1" />
                <Footer />
              </>
            } 
          />
          {/* Define the route for the ContactUs page */}
          <Route path="/contact" element={<ContactUs />} />
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path="/order" element={<OrderNow/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default LandingPage;
