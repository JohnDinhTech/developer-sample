import React, { useState } from "react";
import "./lessonThree.styles.css";
import { connect } from "react-redux";

import rightImage from "../../../images/lesson3-card.jpg";
const LessonThree = ({ selectedPath }) => {
  const rightColumn = [
    "Search far and wide for food",
    "Creating spontaneously, using whatever is available",
    "Moving with a wave-like motion",
    "Spooky, unsettling",
    "Twisted or squirmed, usually in pain",
    "An act or gesture of respect and gratitude",
    "In a threatening, aggressive way",
    "A very small bite of something"
  ];
  const [word, setWord] = useState(null);
  return (
    <div
      className="lesson-three container"
      style={{
        opacity: selectedPath === "lesson-3" ? "1" : "0"
      }}
    >
      <div className="hero-text container">
        <h1>Words to Know</h1>
        <h2>
          What words should you know to appreciate the rest of Part I of the
          novel?{" "}
        </h2>
        <p>
          Although Miyax has finally made friends with Amaroq and the other
          wolves in his pack, she is still struggling to survive. Getting Jello
          to share some meat from his "belly basket" had been a desperate and
          dangerous move on her part, and she can't rely on this method forever.
          The next time she tries, he might attack her instead of giving in to
          his "babysitting" instincts.
        </p>
        <p>
          Throughout the rest of Part I of Julie of the Wolves, the protagonist
          continues her quest to stay alive in spite of the harshness of the
          elements, a shortage of food, and her loneliness. Some of the words
          below may be unfamiliar to you, and yet they will be helpful in
          understanding Miyax's difficult situation even after winning Amaroq's
          trust.
        </p>
      </div>

      <div className="table">
        <div className="left">
          <div
            className="word"
            onClick={() => {
              setWord(0);
            }}
          >
            <p>Forage</p>
          </div>
          <div
            className="word"
            onClick={() => {
              setWord(1);
            }}
          >
            <p>Improvisation</p>
          </div>
          <div
            className="word"
            onClick={() => {
              setWord(2);
            }}
          >
            <p>Undulating</p>
          </div>
          <div
            className="word"
            onClick={() => {
              setWord(3);
            }}
          >
            <p>Eerie</p>
          </div>
          <div
            className="word"
            onClick={() => {
              setWord(4);
            }}
          >
            <p>Writhed</p>
          </div>
          <div
            className="word"
            onClick={() => {
              setWord(5);
            }}
          >
            <p>Tribute</p>
          </div>
          <div
            className="word"
            onClick={() => {
              setWord(6);
            }}
          >
            <p>Menacingly</p>
          </div>
          <div
            className="word"
            onClick={() => {
              setWord(7);
            }}
          >
            <p>Morsel</p>
          </div>
        </div>
        <div className="right">
          <div className="overlay"></div>
          <img src={rightImage} alt="A wolf at the Denali National Park" />
          <h1>{rightColumn[word]}</h1>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ selectedPath }) => ({ selectedPath });

export default connect(mapStateToProps)(LessonThree);
