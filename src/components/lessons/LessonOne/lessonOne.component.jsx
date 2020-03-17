import React from "react";
import { Carousel } from "react-responsive-carousel";

import "./lessonOne.styles.css";

const LessonOne = () => {
  return (
    <div className="lesson-one container">
      <div className="hero-text container">
        <h1>By Association</h1>
        <h2>How does an individual become part of a group?</h2>
        <p>
          Just as there are an infinite number of personal interests and beliefs
          that can be seen among Americans collectively, there are thousands and
          thousands of organizations and groups to which citizens can belong.
          The terms group and organization are very loose and can be interpreted
          very broadly. Some groups are very general and open to all without
          question while others may have specific goals or very selective
          membership. They can be economically motivated, socially focused, or
          even one-issue organizations. However, we can break them down into
          political organizations, interest groups, voluntary and civic
          associations, unions, and religious groups. View the slideshow below
          to learn more.
        </p>
      </div>
      <div className="slider"></div>
    </div>
  );
};

export default LessonOne;
