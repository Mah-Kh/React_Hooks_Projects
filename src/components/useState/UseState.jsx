import styled from "styled-components";

import { COLORS } from "../constants/colors";
import MenuItem from "../MenuItem";

/* Style */
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 5rem;
  background-color: ${COLORS.gray};
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`;

const UseState = () => {
  return (
    <Container>
      <Box style={{ backgroundColor: COLORS.purple1 }}>
        <MenuItem link="counter" text="Counter" />
      </Box>
      <Box style={{ backgroundColor: COLORS.purple2 }}>
        <MenuItem link="input-history" text="Input History" />
      </Box>
    </Container>
  );
};

export default UseState;
