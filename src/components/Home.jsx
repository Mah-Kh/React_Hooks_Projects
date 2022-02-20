import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants/colors";
import MenuItem from "./MenuItem";

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

const Home = () => {
  return (
    <Container>
      <Box style={{ backgroundColor: COLORS.purple1 }}>
        <MenuItem link="use-state" text="useState" />
      </Box>
      <Box style={{ backgroundColor: COLORS.yellow }}>
        <MenuItem link="use-state" text="useEffect" />
      </Box>
      <Box style={{ backgroundColor: COLORS.orange }}>
        <MenuItem link="use-state" text="useContext" />
      </Box>
      <Box style={{ backgroundColor: COLORS.lightBlue }}>
        <MenuItem link="use-state" text="useReducer" />
      </Box>
      <Box style={{ backgroundColor: COLORS.lightGreen }}>
        <MenuItem link="use-state" text="useCallback" />
      </Box>
      <Box style={{ backgroundColor: COLORS.lightRed }}>
        <MenuItem link="use-state" text="useRef" />
      </Box>
    </Container>
  );
};

export default Home;
