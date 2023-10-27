// eslint-disable-next-line
import React from "react";
import CardDisplay from "./components/Card";
import ShowBio from "./components/Home";
import ContactInfo from "./components/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavElement from "./components/NavBar";
import "./App.css";

const App = () => {
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <div>
        <NavElement />
        <Routes>
          <Route exact path="/" element={<ShowBio />} />
          <Route exact path="/home" element={<ShowBio />} />
          <Route exact path="/portfolio" element={<CardDisplay />} />
          <Route exact path="/contact" element={<ContactInfo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
