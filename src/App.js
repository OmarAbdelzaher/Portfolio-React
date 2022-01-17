import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar/NavBar";
import Hero from "./HeroSection/HeroSection";
import About from "./About/about";
import Skills from "./Skills/skills";
import Portfolio from "./Portfolio/portfolio";
import Footer from "./Footer/footer";
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Routes } from 'react-router-dom';
import React from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
      {/* <Router>
        <Routes>
          <Route path="/" component={Hero}/>
        </Routes>
        <Routes>
          <Route path="/portfolio" component={Portfolio} />
        </Routes>
    </Router> */}
    </div>
  );
}

export default App;
