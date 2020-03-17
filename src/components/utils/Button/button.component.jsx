import React from "react";

import "./button.styles.css";

const Button = ({
  text,
  color,
  fontWeight,
  style,
  children,
  isLink,
  ...rest
}) => {
  return (
    <button
      className="btn"
      style={{
        ...style,
        fontWeight,
        backgroundColor: color || "#23D89B",
        color: "#fff"
      }}
      {...rest}
    >
      {children || text}
    </button>
  );
};
export default Button;
