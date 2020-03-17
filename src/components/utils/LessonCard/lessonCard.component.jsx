import React, { useState } from "react";
import "./lessonCard.styles.css";
import { Redirect } from "react-router-dom";
const LessonCard = ({ image, text, path }) => {
  const [url, setUrl] = useState({ redirect: false });
  return url.redirect ? (
    <Redirect push to={url.url} />
  ) : (
    <div
      className="lesson-card"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("${image}") no-repeat center center`,
        backgroundSize: "cover"
      }}
      onClick={() => {
        setUrl({ url: path, redirect: true });
      }}
    >
      <h1>{text}</h1>
    </div>
  );
};

export default LessonCard;
