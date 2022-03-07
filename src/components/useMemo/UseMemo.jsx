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
  justify-content: center;
  align-items: center;
`;
const Main = styled.div`
  min-width: 600px;
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
  height: 300px;
`;

const UseMemo = () => {
  return (
    <Container>
      <Main>
        <Box style={{ backgroundColor: COLORS.purple1 }}>
          <MenuItem link="memo" text="memo" />
        </Box>
        <Box style={{ backgroundColor: COLORS.purple2 }}>
          <MenuItem link="input-history" text="Input History" />
        </Box>
      </Main>
    </Container>
  );
};

export default UseMemo;
