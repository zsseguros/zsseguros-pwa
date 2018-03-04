import * as React from 'react';
import {withRouter} from 'react-router';

interface LoginState {
  userType: number;
  payload: {
    login: string;
    password: string;
  };

}

class Login extends React.Component<any, any>{
  render(){
    if ( this.props.location.pathname.indexOf('cliente') > -1 ) {
      return(
        <div className="row">
          <div className="col-md-6 col-md-push-3 p-2">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">CPF</label>
                <input type="email" className="form-control" id="exampleInputEmail1" name="login" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Senha</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name="password" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-primary">ENTRAR</button>
            </form>
          </div>
        </div>
      );
    } else {
      return(
        <div className="row">
          <div className="col-md-6 col-md-push-3">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Senha</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-primary">ENTRAR</button>
            </form>
          </div>
        </div>
      );
      
    }
  }
}

export default withRouter(Login);