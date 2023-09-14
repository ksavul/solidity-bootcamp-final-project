// AppRouter.tsx
import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./LandingPage";
import GamePage from "./GamePage";
import Balance from "./Balance";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/game" component={GamePage} />
        <Route path="/balance" component={BalancePage} />
        {/* Add more routes for additional pages */}
      </Switch>
    </Router>
  );
}

export default AppRouter;
