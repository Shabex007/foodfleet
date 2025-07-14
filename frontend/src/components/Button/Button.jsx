import React from "react";
import "./Button.css";

const Button = ({
  text,
  onClick,
  iconLeft, // optional
  iconRight, // default is arrow
  className = "",
  style = {},
  type = "button",
}) => {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      style={style}
      type={type}
    >
      {iconLeft && (
        <img src={iconLeft} alt="left icon" className="button-icon left" />
      )}
      <span>{text}</span>
      {iconRight && (
        <img src={iconRight} alt="right icon" className="button-icon right" />
      )}
    </button>
  );
};

export default Button;
