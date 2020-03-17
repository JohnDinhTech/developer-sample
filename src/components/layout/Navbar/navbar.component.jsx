import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./navbar.styles.css";

const Navbar = () => {
  return (
    <nav className="navbar container">
      <Link to="/">Home</Link>
      <ul>
        <li>
          <Link to="lesson-1">Lesson 1</Link>
        </li>
        <li>
          <Link to="lesson-2">Lesson 2</Link>
        </li>
        <li>
          <Link to="lesson-3">Lesson 3</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
