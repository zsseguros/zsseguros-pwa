import * as React from "react";
import { Switch, Route } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import { withRouter } from 'react-router-dom';

class Login extends React.Component<any, any> {

  componentDidMount(){
    if ( localStorage.getItem("id_token") ) {
      this.props.history.push('/corretor');
    }
  }

  render() {
    return (
      <div className="col-12 h-100 d-flex flex-column justify-content-center">
        <Switch>
          <Route exact path="/login/cliente" component={LoginComponent} />
          <Route exact path="/login/corretor" component={LoginComponent} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Login);
