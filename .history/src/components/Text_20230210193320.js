import React from "react";

const Text = ({className = "", content}) => {
  return (
    <p className={`text-base font-light bg-[#a6aaac] ${className}`}>
      {content}
    </p>
  );
};

export default Text;
