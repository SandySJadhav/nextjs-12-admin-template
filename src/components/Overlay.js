import React from "react";

const Overlay = ({ onClick }) => {
  return (
    <div
      onClick={onClick}
      className="absolute top-0 left-0 right-0 bottom-0 z-10 origin-top-left"
    ></div>
  );
};

export default Overlay;
