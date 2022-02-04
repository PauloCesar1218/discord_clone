import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";

const AppRoutes: React.FC = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/home/:channel?">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default AppRoutes;
