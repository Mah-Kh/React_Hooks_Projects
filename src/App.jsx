import React from "react";
import { Routes, Route } from "react-router-dom";

import "./style.css";

import Home from "./components/Home";
import UseState from "./components/useState/UseState";
import Counter from "./components/useState/Counter";
import InputHistory from "./components/useState/InputHistory";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/use-state" element={<UseState />} />
        <Route path="/use-state/counter" element={<Counter />} />
        <Route path="/use-state/input-history" element={<InputHistory />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
