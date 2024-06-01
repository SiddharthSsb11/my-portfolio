import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import "./index.scss";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      <div className="noise-overlay"></div>
      <>
        <Navbar />
        <div>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Projects />} path="/projects/*" />
            <Route element={<About />} path="/about" />
            <Route element={<Contact />} path="/contact" />
          </Routes>
        </div>
      </>
    </div>
  );
}

export default App;
