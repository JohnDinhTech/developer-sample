import React from "react";
import { connect } from "react-redux";
import { SET_SELECTED_PATH } from "../../../actions/types";
import { Link } from "react-router-dom";
import { setSelectedPath } from "../../../actions";
import "./navbar.styles.css";

const Navbar = ({ setSelectedPath, selectedPath }) => {
  return (
    <nav className="navbar container">
      <Link
        style={{ color: selectedPath === "/" ? "#23D89B" : "#000" }}
        onClick={() => {
          setSelectedPath("/", SET_SELECTED_PATH);
        }}
        to="/"
      >
        Home
      </Link>
      <ul>
        <li>
          <Link
            style={
              selectedPath === "lesson-1"
                ? {
                    color: "#23D89B",
                    opacity: "100%"
                  }
                : {}
            }
            onClick={() => {
              setSelectedPath("lesson-1", SET_SELECTED_PATH);
            }}
            to="lesson-1"
          >
            Lesson 1
          </Link>
        </li>
        <li>
          <Link
            style={
              selectedPath === "lesson-2"
                ? {
                    color: "#23D89B",
                    opacity: "100%"
                  }
                : {}
            }
            onClick={() => {
              setSelectedPath("lesson-2", SET_SELECTED_PATH);
            }}
            to="lesson-2"
          >
            Lesson 2
          </Link>
        </li>
        <li>
          <Link
            style={
              selectedPath === "lesson-3"
                ? {
                    color: "#23D89B",
                    opacity: "100%"
                  }
                : {}
            }
            onClick={() => {
              setSelectedPath("lesson-3", SET_SELECTED_PATH);
            }}
            to="lesson-3"
          >
            Lesson 3
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = ({ selectedPath }) => ({ selectedPath });

export default connect(mapStateToProps, { setSelectedPath })(Navbar);
