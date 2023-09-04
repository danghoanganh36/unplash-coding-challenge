import React from "react";
import "../styles/Home.css";
import MenuBar from "../components/MenuBar";
import Navigation from "../components/Navigation";
import Gallery from "../components/Gallery";
import { BrowserRouter, Routes, Route } from "react-router-dom"; 

const Home = () => {
  
  return (
    <div className="container">
      <BrowserRouter> 
        <header className="header">
          <MenuBar />
          <Navigation />
        </header>
        <Routes>
        <Route path="/topic/:topic" element={<Gallery />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Home;
