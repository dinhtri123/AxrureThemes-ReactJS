import React from "react";

const Text = ({className = "", content}) => {
  return (
    <p className={` font-light ${className}`}>
      {content}
    </p>
  );
};

export default Text;
