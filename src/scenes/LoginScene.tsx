import * as React from "react";
import { Switch, Route } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";

class Login extends React.Component<any, any> {
  render() {
    return (
      <Switch>
        <Route path="/login/cliente" component={LoginComponent} />
        <Route path="/login/corretor" component={LoginComponent} />
      </Switch>
    );
  }
}

export default Login;
