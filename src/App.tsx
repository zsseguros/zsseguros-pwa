import * as React from "react";
import "./css/App.css";
import { Switch, Route } from "react-router-dom";
import Login from './scenes/LoginScene';

const logo = require("./css/logo.svg");

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
        
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return(
                  <p className="App-intro">
                    Você é <i> <a className="login-link" href="/login/cliente">segurado</a> </i> ou <a className="login-link" href="/login/corretor">corretor</a> ?
                  </p>                
                );
              }}
            />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
