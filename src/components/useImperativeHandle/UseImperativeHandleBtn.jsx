import { useRef, useState } from "react";
import styled from "styled-components";

import { COLORS } from "../constants/colors";
import Button from "./Button";

const UseImperativeHandleBtn = () => {
  const buttonRef = useRef(null);

  return (
    <>
      <div>
        <button
          onClick={() => {
            buttonRef.current.alterToggle();
          }}
        >
          Button from parent
        </button>
      </div>
      <div>
        <Button ref={buttonRef} />
      </div>
    </>
  );
};

export default UseImperativeHandleBtn;
