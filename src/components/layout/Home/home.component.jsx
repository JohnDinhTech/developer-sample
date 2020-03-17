import React from "react";
import "./home.styles.css";

import LessonCard from "../../utils/LessonCard/lessonCard.component";

import lessonOneImage from "../../../images/lesson1-card.jpg";
import lessonTwoImage from "../../../images/lesson2-card.jpg";
import lessonThreeImage from "../../../images/lesson3-card.jpg";

const Home = () => {
  return (
    <div className="home container">
      <div className="hero-text">
        <h1>Welcome Back</h1>
        <h2>Choose A Lesson</h2>
      </div>
      <div className="lessons">
        <LessonCard image={lessonOneImage} text="Lesson 1" path="/lesson-1" />
        <LessonCard image={lessonTwoImage} text="Lesson 2" path="/lesson-2" />
        <LessonCard image={lessonThreeImage} text="Lesson 3" path="/lesson-3" />
      </div>
    </div>
  );
};

export default Home;
