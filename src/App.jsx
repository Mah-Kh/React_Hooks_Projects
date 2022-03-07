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
import UseReducer from "./components/useReducer/UseReducer";
import Reducer from "./components/useReducer/Reducer";
import UseContext from "./components/useContext/UseContext";
import Context from "./components/useContext/Context";
import UseImperativeHandle from "./components/useImperativeHandle/UseImperativeHandle";
import UseImperativeHandleBtn from "./components/useImperativeHandle/UseImperativeHandleBtn";
import UseMemo from "./components/useMemo/UseMemo";
import Memo from "./components/useMemo/Memo";
import UseCallback from "./components/useCallback/UseCallback";
import Callback from "./components/useCallback/Callback";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/use-state" element={<UseState />} />
        <Route path="/use-state/counter" element={<Counter />} />
        <Route path="/use-state/input-history" element={<InputHistory />} />
        <Route path="/use-effect" element={<UseEffect />} />
        <Route path="/use-effect/scroll-effect" element={<ScrollEffect />} />
        <Route path="/use-reducer" element={<UseReducer />} />
        <Route path="/use-reducer/reducer" element={<Reducer />} />
        <Route path="/use-ref" element={<UseRef />} />
        <Route path="/use-ref/hover-effect" element={<HoverEffect />} />
        <Route path="/use-context" element={<UseContext />} />
        <Route path="/use-context/context" element={<Context />} />
        <Route
          path="/use-imperative-handle"
          element={<UseImperativeHandle />}
        />
        <Route
          path="/use-imperative-handle/use-imperative-handle-btn"
          element={<UseImperativeHandleBtn />}
        />
        <Route path="/use-memo" element={<UseMemo />} />
        <Route path="/use-memo/memo" element={<Memo />} />
        <Route path="/use-callback" element={<UseCallback />} />
        <Route path="/use-callback/callback" element={<Callback />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
