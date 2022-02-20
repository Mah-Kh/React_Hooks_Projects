import React from "react";
import { Routes, Route } from "react-router-dom";

import "./style.css";

import Home from "./components/Home";
import UseState from "./components/useState/UseState";
import Counter from "./components/useState/Counter";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/use-state" element={<UseState />} />
        <Route path="/use-state/counter" element={<Counter />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
