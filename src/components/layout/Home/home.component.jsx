import React from "react";
import "./home.styles.css";

import { SET_SELECTED_PATH } from "../../../actions/types";
import { connect } from "react-redux";
import { setSelectedPath } from "../../../actions";

import LessonCard from "../../utils/LessonCard/lessonCard.component";

import lessonOneImage from "../../../images/lesson1-card.jpg";
import lessonTwoImage from "../../../images/lesson2-card.jpg";
import lessonThreeImage from "../../../images/lesson3-card.jpg";

const Home = ({ selectedPath, setSelectedPath }) => {
  return (
    <div
      className="home container"
      style={{
        opacity: selectedPath === "/" ? "1" : "0"
      }}
    >
      <div className="hero-text">
        <h1>Welcome Back</h1>
        <h2>Choose A Lesson</h2>
      </div>
      <div className="lessons">
        <LessonCard
          setPath={() => {
            setSelectedPath("lesson-1", SET_SELECTED_PATH);
          }}
          image={lessonOneImage}
          text="Lesson 1"
          path="/lesson-1"
        />
        <LessonCard
          setPath={() => {
            setSelectedPath("lesson-2", SET_SELECTED_PATH);
          }}
          image={lessonTwoImage}
          text="Lesson 2"
          path="/lesson-2"
        />
        <LessonCard
          setPath={() => {
            setSelectedPath("lesson-3", SET_SELECTED_PATH);
          }}
          image={lessonThreeImage}
          text="Lesson 3"
          path="/lesson-3"
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ selectedPath }) => ({ selectedPath });

export default connect(mapStateToProps, {
  setSelectedPath
})(Home);
