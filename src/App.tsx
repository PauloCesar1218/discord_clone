import React from "react";
import GlobalStyles from "./assets/styles/GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/index";
import Home from "./pages/Home/index";

const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <h1>Index</h1>
          </Route>
        </Switch>
      </Router>
      <GlobalStyles />
    </div>
  );
};

export default App;
