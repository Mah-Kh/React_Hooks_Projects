import React from "react";
import { useRef } from "react";

const ImageToggle = ({ primary, secondary }) => {
  const imgRef = useRef(null);

  return (
    <img
      ref={imgRef}
      onMouseOver={() => {
        imgRef.current.src = primary;
      }}
      onMouseOut={() => {
        imgRef.current.src = secondary;
      }}
      src={secondary}
      alt="image"
      style={{
        width: "500px",
        height: "500px",
        marginLeft: "20px",
        objectFit: "cover",
      }}
    />
  );
};

export default ImageToggle;
