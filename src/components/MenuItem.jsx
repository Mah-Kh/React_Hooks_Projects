import { NavLink } from "react-router-dom";

import styled from "styled-components";

const Text = styled.h2`
  color: #fff;
  line-height: 3rem;
`;

const MenuItem = (props) => {
  return (
    <>
      <NavLink to={props.link} style={{ textDecoration: "none" }}>
        <Text>{props.text}</Text>
      </NavLink>
    </>
  );
};

export default MenuItem;
