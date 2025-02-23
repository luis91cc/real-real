import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TestAutoestima from "./pages/TestAutoestima";
import Galeria from "./pages/Galeria";
import Foro from "./pages/Foro";
import Recursos from "./pages/Recursos";
import "./styles.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test-autoestima" element={<TestAutoestima />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/foro" element={<Foro />} />
        <Route path="/recursos" element={<Recursos />} />
      </Routes>
    </>
  );
}

export default App;
