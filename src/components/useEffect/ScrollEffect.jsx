import React from "react";
import styled from "styled-components";

import fox from "./img/1.jpg";
import foxb from "./img/11.jpg";
import cat from "./img/2.jpg";
import catb from "./img/22.jpg";

import ImageToggle from "./ImageToggle";

/* Style */
const Container = styled.div`
  background-color: rgb(183, 184, 185);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

const ScrollEffect = () => {
  return (
    <Container>
      <ImageToggle primary={fox} secondary={foxb} />
      <ImageToggle primary={cat} secondary={catb} />
      <ImageToggle primary={fox} secondary={foxb} />
      <ImageToggle primary={cat} secondary={catb} />
      <ImageToggle primary={fox} secondary={foxb} />
      <ImageToggle primary={cat} secondary={catb} />
    </Container>
  );
};

export default ScrollEffect;
