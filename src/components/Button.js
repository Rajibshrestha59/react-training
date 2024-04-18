import React from "react";

const ButtonComponent = (props) => {
  return (
    <div onClick={() => props.onClick()} className="button-container">
      <span className="button-text">{props.buttonText}</span>
    </div>
  );
};

export default ButtonComponent;
