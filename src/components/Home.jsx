import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

/* Style */
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  background-color: #212121;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;
const Text = styled.h2`
  color: #fff;
`;

const Home = () => {
  return (
    <Container>
      <Box style={{ backgroundColor: "#6a4c93" }}>
        <NavLink to="use-state" style={{ textDecoration: "none" }}>
          <Text>useState</Text>
        </NavLink>
      </Box>
      <Box style={{ backgroundColor: "#ffca3a" }}>
        <NavLink to="use-state" style={{ textDecoration: "none" }}>
          <Text>useEffect</Text>
        </NavLink>
      </Box>
      <Box style={{ backgroundColor: "#f79256" }}>
        <NavLink to="use-state" style={{ textDecoration: "none" }}>
          <Text>useContext</Text>
        </NavLink>
      </Box>
      <Box style={{ backgroundColor: "#1982c4" }}>
        <NavLink to="use-state" style={{ textDecoration: "none" }}>
          <Text>useReducer</Text>
        </NavLink>
      </Box>
      <Box style={{ backgroundColor: "#7dcfb6" }}>
        <NavLink to="use-state" style={{ textDecoration: "none" }}>
          <Text>useCallback</Text>
        </NavLink>
      </Box>
      <Box style={{ backgroundColor: "#ff595e", marginRight: "auto" }}>
        <NavLink to="use-state" style={{ textDecoration: "none" }}>
          <Text>useRef</Text>
        </NavLink>
      </Box>
    </Container>
  );
};

export default Home;
