import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import HomeLayouts from "./layouts/HomeLayouts/HomeLayouts";
import Home from "./pages/Home";

const HomePage = () => (
  <HomeLayouts>
    <Home />
  </HomeLayouts>
);

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;
