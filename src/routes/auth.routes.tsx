import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./../pages/Login/index";

const AuthRoutes: React.FC = () => {
  return (
      <div>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/">
              <h1>Index</h1>
            </Route>
          </Switch>
        </Router>
      </div>
  );
};

export default AuthRoutes;
