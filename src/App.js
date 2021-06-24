import HomePage from "./Template/HomePage";
import Project from "./Template/ProjectPage"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/list-project">
        <Project />
      </Route>
    </Switch>
    
  </Router>
  );
}

export default App;
