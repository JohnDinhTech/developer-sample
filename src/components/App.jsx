import React from "react";
import Navbar from "./layout/Navbar/navbar.component";
import Home from "./layout/Home/home.component";
import Footer from "./layout/Footer/footer.component";

import LessonOne from "./lessons/LessonOne/lessonOne.component";
import LessonTwo from "./lessons/LessonTwo/lessonTwo.component";
import LessonThree from "./lessons/LessonThree/lessonThree.component";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/lesson-1">
        <LessonOne />
      </Route>
      <Route exact path="/lesson-2">
        <LessonTwo />
      </Route>
      <Route exact path="/lesson-3">
        <LessonThree />
      </Route>
      <Footer />
    </Router>
  );
};

export default App;
