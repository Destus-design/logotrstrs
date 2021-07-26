import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import "./App.css";
import Intro from "./components/Intro";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="app">
      {" "}
      <Router>
        <Switch>
          <Route exact path="/" component={Header} />

          <div>
            <Route exact path="/intro" component={Intro} />

            <Route path="/intro" component={Intro} />
            <Route path="/forgot-password" component={""} />
          </div>
        </Switch>
      </Router>
    </div>
  );
};
export default App;
