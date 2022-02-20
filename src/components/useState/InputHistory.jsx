import { useState } from "react";

import { COLORS } from "../constants/colors";

const InputHistory = () => {
  const [inputText, setInputText] = useState("");
  const [inputHistory, setInputHistory] = useState([]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.dark,
      }}
    >
      <input
        style={{ padding: "10px", margin: 20, minWidth: "350px" }}
        onChange={(e) => {
          setInputText(e.target.value);
          setInputHistory([...inputHistory, e.target.value]);
        }}
        placeholder="Enter somthing ..."
      />
      {inputText !== "" && (
        <ul style={{ padding: "5px", backgroundColor: COLORS.white }}>
          {inputHistory.map((item) => {
            return <div>{item}</div>;
          })}
        </ul>
      )}
    </div>
  );
};

export default InputHistory;
