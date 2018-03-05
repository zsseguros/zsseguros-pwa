import * as React from "react";
import { Switch, Route } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";

class SignUp extends React.Component<any, any> {
  render() {
    return (
      <Switch>
        <Route path="/signup" component={LoginComponent} />
      </Switch>
    );
  }
}

export default SignUp;
