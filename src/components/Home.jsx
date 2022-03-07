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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #212121;
`;
const Main = styled.div`
  max-width: 950px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 150px;
`;

const Home = () => {
  return (
    <Container>
      <Main>
        <Box style={{ backgroundColor: COLORS.purple1 }}>
          <MenuItem link="use-state" text="useState" />
        </Box>
        <Box style={{ backgroundColor: COLORS.yellow }}>
          <MenuItem link="use-effect" text="useEffect" />
        </Box>
        <Box style={{ backgroundColor: COLORS.lightBlue }}>
          <MenuItem link="use-reducer" text="useReducer" />
        </Box>
        <Box style={{ backgroundColor: COLORS.lightRed }}>
          <MenuItem link="use-ref" text="useRef" />
        </Box>
        <Box style={{ backgroundColor: COLORS.orange }}>
          <MenuItem link="use-context" text="useContext" />
        </Box>
        <Box style={{ backgroundColor: COLORS.lightGreen }}>
          <MenuItem link="use-imperative-handle" text="useImperativeHandle" />
        </Box>
        <Box style={{ backgroundColor: COLORS.purple1 }}>
          <MenuItem link="use-memo" text="useMemo" />
        </Box>
        <Box style={{ backgroundColor: COLORS.yellow }}>
          <MenuItem link="use-callback" text="useCallback" />
        </Box>
      </Main>
    </Container>
  );
};

export default Home;
