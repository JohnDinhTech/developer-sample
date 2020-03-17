import React, { useState, Fragment } from "react";
import { connect } from "react-redux";

import "./lessonTwo.styles.css";
import ChoiceCard from "../../utils/ChoiceCard/choiceCard.component";
const LessonTwo = ({ selectedPath }) => {
  const questions = [
    {
      text:
        "Janelle is excitedly telling her friend Reina how her job interview went. Reina keeps texting her boyfriend",
      answer: 1
    },
    {
      text:
        "“I can see your point about the cost of the streetlights, but what about the nighttime safety of the people who live in the neighborhood?”",
      answer: 0
    },
    {
      text:
        "All of Ron’s friends keep asking him to go camping with them next month, but he doesn’t enjoy the outdoors. His friends won’t stop nagging him.",
      answer: 1
    },
    {
      text:
        "Because our cousin LeVar has asthma, we always dust and vacuum before he spends the night at our house.",
      answer: 0
    },
    {
      text:
        "Stacy, who is frightened of dogs, meets Jarrod and his dog Thor out on a walk. Jarrod says, “Don’t be scared, Stacy. Thor is really gentle. Just try rubbing his ears.”",
      answer: 1
    },
    {
      text: "I love oyster-flavored Jiffy Snax! Doesn’t everybody?",
      answer: 1
    }
  ];
  const [multipleChoice, setMultipleChoice] = useState({
    current: 0,
    message: <span></span>,
    correct: 0
  });

  const correctAnswer = () => {
    setMultipleChoice({
      ...multipleChoice,
      correct: multipleChoice.correct + 1,
      message: (
        <span style={{ color: "#23D89B", fontSize: "2rem" }}>Good Job!</span>
      )
    });
    setTimeout(() => {
      setMultipleChoice({
        message: <span></span>,
        current: multipleChoice.current + 1
      });
    }, 1000);
  };

  const incorrectAnswer = () => {
    setMultipleChoice({
      ...multipleChoice,
      message: (
        <span style={{ color: "#DB0C0C", fontSize: "2rem" }}>
          Take another look at the examples in this lesson.
        </span>
      )
    });
  };

  return (
    <div
      className="lesson-two container"
      style={{
        opacity: selectedPath === "lesson-2" ? "1" : "0"
      }}
    >
      <div className="hero-text container">
        <h1>Practice</h1>
        <h2>Respect or disrespect?</h2>
        <p>
          Now that you’ve seen examples of the ways people show one another
          respect and disrespect, see if you can classify the following words
          and actions. Read each item and decide whether it shows respect or
          disrespect.
        </p>
      </div>
      <div className="mc">
        {multipleChoice.current === questions.length ? (
          <h1 style={{ marginTop: "-5rem", paddingBottom: "10rem" }}>
            Great Job! You have completed the lesson.
          </h1>
        ) : (
          <Fragment>
            <h1>{questions[multipleChoice.current].text}</h1>
            {multipleChoice.message}
            <div className="choices">
              <ChoiceCard
                letter="A"
                text="Respect"
                onClick={e => {
                  questions[multipleChoice.current].answer === 0
                    ? correctAnswer()
                    : incorrectAnswer();
                }}
              />
              <ChoiceCard
                letter="B"
                text="Disrespect"
                onClick={e => {
                  questions[multipleChoice.current].answer === 1
                    ? correctAnswer()
                    : incorrectAnswer();
                }}
              />
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = ({ selectedPath }) => ({ selectedPath });

export default connect(mapStateToProps)(LessonTwo);
