import * as React from "react";
import "./css/App.css";
import { Switch, Route } from "react-router-dom";
import Login from './scenes/LoginScene';
import {Link} from 'react-router-dom';
import Corretor from './scenes/CorretorScene';
import {connect} from 'react-redux';
import { saveUser } from './actions/loginActions';
import SignUpScene from './scenes/SignUpScene';
import SignUp from './scenes/SignUpScene';
import {withRouter} from 'react-router-dom';

const logo = require("./css/logo.svg");

class App extends React.Component {

  componentDidMount(){

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ZSSEGUROS</h1>
        </header>
        <div className="container-fluid">

          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return(
                  <p className="App-intro row">
                    Eu sou: 
                    {/* <Link className="link" to="/login/cliente"  ><button className="btn btn-info" >SEGURADO</button></Link> */}
                    <Link className="link" to="/login/corretor" ><button className="btn btn-info" >CORRETOR</button></Link>
                  </p>
                );
              }}
            />
            <Route path="/login" component={Login} />
            <Route path="/corretor" component={Corretor} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, {saveUser})(App));
