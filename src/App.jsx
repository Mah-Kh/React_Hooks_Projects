import React from "react";
import { Routes, Route } from "react-router-dom";

import "./style.css";

import Home from "./components/Home";
import UseState from "./components/useState/UseState";
import Counter from "./components/useState/Counter";
import InputHistory from "./components/useState/InputHistory";
import UseEffect from "./components/useEffect/UseEffect";
import ScrollEffect from "./components/useEffect/ScrollEffect";
import UseRef from "./components/useRef/UseRef";
import HoverEffect from "./components/useRef/HoverEffect";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/use-state" element={<UseState />} />
        <Route path="/use-state/counter" element={<Counter />} />
        <Route path="/use-state/input-history" element={<InputHistory />} />
        <Route path="/use-effect" element={<UseEffect />} />
        <Route path="/use-effect/scroll-effect" element={<ScrollEffect />} />
        <Route path="/use-ref" element={<UseRef />} />
        <Route path="/use-ref/hover-effect" element={<HoverEffect />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
