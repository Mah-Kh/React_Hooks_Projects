import { useState } from "react";
import styled from "styled-components";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("blue");
  const [text, setText] = useState("grey");

  const changeToGrey = () => {
    setColor("grey");
    setText("blue");
  };
  const changeToBlue = () => {
    setColor("blue");
    setText("grey");
  };

  /* Style */
  const Container = styled.div`
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: #212121;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Counter = styled.div`
    width: 50%;
    height: 40vh;
    padding: 2rem;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    background: ${() => (color === "blue" ? "#0048be" : "#727272")};
  `;
  const Title = styled.h1`
    font-size: 4rem;
    color: white;
  `;
  const Text = styled.p`
    font-size: 2rem;
    color: white;
  `;
  const ButtonsContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const Button = styled.button`
    cursor: pointer;
    padding: 1rem 2rem;
    color: #0048be;
    background: #fff;
    outline: none;
    border: none;
    border-radius: 0.5rem;
    transition: all 1s ease;
    &:active {
      transform: scale(0.6);
    }
  `;

  return (
    <Container>
      <Counter>
        <Title>Counter with useState</Title>
        <Text>{count}</Text>
        <ButtonsContainer>
          <Button onClick={() => setCount(count + 1)}>Click me!</Button>
          <Button
            onClick={() => {
              color === "blue" ? changeToGrey() : changeToBlue();
            }}
          >
            {`Change to ${text}`}
          </Button>
        </ButtonsContainer>
      </Counter>
    </Container>
  );
};

export default Counter;
