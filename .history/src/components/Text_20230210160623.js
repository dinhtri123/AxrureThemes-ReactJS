import React from "react";

const Text = ({className}) => {
  return (
    <p className={`text-base font-light ${className}`}>
      {content}
    </p>
  );
};

export default Text;
