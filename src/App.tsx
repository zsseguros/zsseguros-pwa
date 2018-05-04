import * as React from "react";
import Login from "appSrc/scenes/LoginScene";
import Corretor from "appSrc/scenes/CorretorScene";
import { saveUser } from "appSrc/actions/loginActions";
import SignUpScene from "appSrc/scenes/SignUpScene";
import SignUp from "appSrc/scenes/SignUpScene";
import NavBar from 'appSrc/components/NavBar';
import swal from 'sweetalert2';
import { connect } from "react-redux";
import { Switch, Route, Link, withRouter } from "react-router-dom";

class App extends React.Component<any, any> {
  componentDidMount() {
    if ( !localStorage.getItem('token') ) {
      this.props.history.push('/login/corretor');
    } else {
      this.props.saveUser( localStorage.getItem('token') );
      this.props.history.push('/corretor');
    }
  }

  toggleNavBar(){
    if ( $('body').hasClass('sidenav-toggled') ) {
      $('body').removeClass('sidenav-toggled');
    } else {
      $('body').addClass('sidenav-toggled');
    }
  }

  render() {
    return (
      <div className="container-fluid">
        {
          this.props.location.pathname === '/login/corretor' ?
          <div className="col-4">
          &nbsp;
          </div>
          :
            <div className="col-4">
              <NavBar toggleNavBar={(e: any) => this.toggleNavBar()} />
            </div>
        }
        <div className="content-wrapper">
            <div className="col-12 h-100" style={{ marginTop: '100px' }} >
              <div className="row h-100 d-flex justify-content-center">
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => {
                      return (
                        <p className="App-intro">
                          Eu sou:
                          {/* <Link className="link" to="/login/cliente"  ><button className="btn btn-info" >SEGURADO</button></Link> */}
                          <Link className="link" to="/login/corretor">
                            <button className="btn btn-info">CORRETOR</button>
                          </Link>
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
          </div>
        </div>
    );
  }
}

export default withRouter(connect(null, { saveUser })(App));
