import React from "react";
import Navbar from "./layout/Navbar/navbar.component";
import Home from "./layout/Home/home.component";
import Footer from "./layout/Footer/footer.component";

import LessonOne from "./lessons/LessonOne/lessonOne.component";
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
      <Footer />
    </Router>
  );
};

export default App;
