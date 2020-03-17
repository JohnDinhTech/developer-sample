import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Button from "../../utils/Button/button.component";

import { connect } from "react-redux";

import slide1 from "../../../images/slide1.jpg";
import slide2 from "../../../images/slide2.png";
import slide3 from "../../../images/slide3.jpg";
import slide4 from "../../../images/slide4.jpg";
import slide5 from "../../../images/slide5.jpg";

import "./lessonOne.styles.css";

const LessonOne = ({ selectedPath }) => {
  const [answer, setAnswer] = useState({ visible: false, answer: "" });
  return (
    <div
      className="lesson-one container"
      style={{
        opacity: selectedPath === "lesson-1" ? "1" : "0"
      }}
    >
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
      <Carousel>
        <div className="slide">
          <div className="overlay"></div>
          <img src={slide1} alt="Secretary Kerry Delivering A Speech" />
          <div className="text container">
            <h1>Political Organizations</h1>
            <p>
              Political organizations have the general goal of trying to either
              influence or take control of government to achieve outcomes.
              Political parties, such as the Democrats, Republicans, and
              Libertarians, all fall in the category, but one might also find
              groups such as FreedomWorks or the Center for American Progress.
              Depending on the group or organization, citizens may find
              membership in them a challenge as political parties often take
              time to join in an active level, or groups may insist on alignment
              with philosophical goals.
            </p>
          </div>
        </div>
        <div className="slide">
          <div className="overlay"></div>
          <img src={slide2} alt="Ames Straw Poll" />
          <div className="text container">
            <h1>Interest Groups</h1>
            <p>
              Interest groups tend to be centered on a common goal or idea.
              These groups run the table in terms of interests and concerns,
              including the National Organization for Women, La Raza, National
              Right to Life, and the National Rifle Association. Many could be
              considered political as they have aims to influence leadership.
              However, membership tends to be less restrictive as many look for
              volunteers to help spread their messages and ideas.
            </p>
          </div>
        </div>
        <div className="slide">
          <div className="overlay"></div>
          <img src={slide3} alt="United Way at 11th and Morrison, Portland" />
          <div className="text container">
            <h1>Voluntary and Civic Associations</h1>
            <p>
              Volunteering and civic participation tends to be the most local
              level of group membership. Often parts of larger organizations,
              these groups are often charitable, and work for general causes, or
              serve as a means of fraternal support. Such groups differ widely,
              with some very open to anyone interested, such as the Red Cross or
              United Way, and others with very selective membership procedures,
              such as the Elks or Freemasons.
            </p>
          </div>
        </div>
        <div className="slide">
          <div className="overlay"></div>
          <img
            src={slide4}
            alt="Strike of 700 members of the Stock Handlers Union"
          />
          <div className="text container">
            <h1>Unions</h1>
            <p>
              Unions were created to support the needs of workers in various
              fields of industry and service and are responsible for helping to
              promote safe workplaces and fair labor practices. Over the years,
              unions have often increased their activities to include charitable
              works and political involvement to support candidates and ideas
              that serve to aid their general membership. Unions include the
              AFL-CIO and the NEA. Union membership is selective in that one
              must usually be employed in a particular field to join; however,
              in some places union membership is actually mandatory by state law
              if employed in certain jobs.
            </p>
          </div>
        </div>
        <div className="slide">
          <div className="overlay"></div>
          <img
            src={slide5}
            alt="George W. Bush meeting Knights of Columbus in Dallas, Texas"
          />
          <div className="text container">
            <h1>Religious Groups</h1>
            <p>
              Religious groups is a very broad category as it can refer to
              specific religious denominations or sects, or it can refer to
              organizations and societies that support the views of particular
              religions and belief systems. For example, entire denominations
              have lobbying organizations to petition on their behalf. Other
              organizations exist to promote the ideas of a religious group,
              such as the Anti-Defamation League, which exists to prevent
              persecution of Jewish citizens, and the Knights of Columbus, an
              association of Catholic men. Generally, membership in groups
              requires adherence to the beliefs of the sect or denomination, but
              some have more stringent requirements for participation.
            </p>
          </div>
        </div>
      </Carousel>
      <div className="question">
        <h1>Do some organizations and groups overlap categories?</h1>
        <form
          onSubmit={e => {
            e.preventDefault();
            setAnswer({ ...answer, visible: true });
          }}
        >
          <input
            type="text"
            placeholder="Type your answer"
            onChange={e => {
              setAnswer({ ...answer, answer: e.target.value });
            }}
          />
          <Button
            onClick={() => {
              setAnswer({ ...answer, visible: true });
            }}
            style={{ display: "block", margin: "1rem auto" }}
          >
            Submit
          </Button>
        </form>

        <div
          className="hidden-answer"
          style={{
            display: answer.visible ? "block" : "none"
          }}
        >
          <p>You answered: {answer.answer}</p>
          <p>
            Answer: Yes. Many organizations could fall under the idea of
            political organizations or interest groups since they tend to aim
            for political influence and focus on areas of common interest.
            However, some are more explicitly political, while others have
            politics as a goal among many.
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ selectedPath }) => ({ selectedPath });

export default connect(mapStateToProps)(LessonOne);
