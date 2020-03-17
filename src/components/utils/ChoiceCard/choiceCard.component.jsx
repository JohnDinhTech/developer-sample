import React from "react";
import "./choiceCard.styles.css";
const ChoiceCard = ({ letter, text, ...rest }) => {
  return (
    <div className="choice-card" {...rest}>
      <h1>{letter}</h1>
      <p>{text}</p>
    </div>
  );
};

export default ChoiceCard;
