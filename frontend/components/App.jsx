import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import HomepageContainer from "./homepage/homepage_container"
import SignupFormContainer from "./sessions/signup_form_container";
import LoginFormContainer from "./sessions/login_form_container";

const App = () => (
  <div>
    <Switch>
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <Route path="/" component={HomepageContainer} />
    </Switch>
  </div>
);

export default App;