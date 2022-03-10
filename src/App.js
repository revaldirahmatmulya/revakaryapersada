import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarSite from "./components/NavbarSite";
import Home from "./components/Home";
import About from "./components/About";
import Team from "./components/Team";
import Services from "./components/Services";
import Contact from "./components/Contact";
import VisiMisi from "./components/VisiMisi";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavbarSite />
        <Home />
        <About />
        <VisiMisi />
        <Services />
        <Team />
        <Contact />
        <Footer />
        {/* Single Page */}
        {/* <NavbarSite />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/visimisi" element={<VisiMisi />} />
        </Routes> */}
      </Router>
    </div>
  );
}

export default App;
