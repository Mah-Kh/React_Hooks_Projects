import React from "react";
import { useEffect, useState, useRef } from "react";

const ImageToggle = ({ primary, secondary }) => {
  const imgRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", scrolHandler);
    setInView(isInView); // without this, after scrolling, the image src is considered
    setIsLoading(false);

    // clean up
    // If isLoading change, means component is not there, So scrolHandler does not need
    return (
      () => {
        window.removeEventListener("scroll", scrolHandler);
      },
      [isLoading]
    );
  });

  const isInView = () => {
    if (imgRef.current) {
      const rect = imgRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    return false;
  };

  const scrolHandler = () => {
    setInView(() => {
      return isInView();
    });
  };

  // whithout checking isLoading, after each refrech of the page, all images will be in greyscale at the first time
  return isLoading ? null : (
    <img
      ref={imgRef}
      src={inView ? primary : secondary}
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
