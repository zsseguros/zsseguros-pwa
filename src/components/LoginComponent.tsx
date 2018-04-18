import * as React from 'react';
import {withRouter} from 'react-router-dom';
import {fbLogin, fbSignUp} from '../APIs/firebase';
import {connect} from 'react-redux';
import { saveUser } from '../actions/loginActions';
import swal from 'sweetalert2';
import {Link, Router} from 'react-router-dom';

interface LoginState {
  userType: number;
  payload: {
    login: string;
    password: string;
  };
  isLogingIn: boolean;
}

class Login extends React.Component<any, LoginState>{

  constructor(props: any){
    super(props);

    this.state = {
      userType: 99,
      payload: {
        login: '',
        password: ''
      },
      isLogingIn: false
    }
  }

  componentDidMount(){
    if ( this.props.location.pathname.indexOf("/login/cliente") > -1 ) {
      this.setState({
        userType: 0
      });
    } else {
      this.setState({
        userType: 1
      });
    }
  }

  componentWillReceiveProps(nextProps){
    if ( nextProps.userInfo !== null ) {
      
      
    }

    if ( this.props.userInfo === null && nextProps.userInfo === null ) {
      this.setState({
        isLogingIn: false
      });
    }
  }

  handleChange(e: any){

    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      payload: {
        ...this.state.payload,
        [name]: value
      }
    });
  }

  handleSubmit(e: any){
    e.preventDefault();

    this.setState({
      isLogingIn: !this.state.isLogingIn
    }, () => {
      fbLogin(this.state.payload.login, this.state.payload.password, (userInfo) => {
  
        if ( userInfo.email ) {
          
          this.props.saveUser(userInfo);
  
          localStorage.setItem("idToken", userInfo.getIdToken(false).then( (token) => JSON.stringify(token)).catch( (error) => '') );
          localStorage.setItem("loggedIn", 'true' );

          swal({
            type: 'success',
            title: 'logged in!'
          }).then( (confirm) => {
            if (confirm.value) {
              this.props.history.push(this.state.userType === 0 ? '/cliente' : '/corretor');
            }
          });

        } else {

          this.setState({
            isLogingIn: !this.state.isLogingIn
          });

          swal({
            type: 'error',
            title: 'Falha no login!',
            text: 'Usuário não encontrado!'
          });
        }
  
      });
    });

  }

  handleSubmitSignUp(e: any){
    e.preventDefault();

    this.setState({
      isLogingIn: !this.state.isLogingIn
    });

    fbSignUp(this.state.payload.login, this.state.payload.password, (response) => {

      if ( response ) {
        swal({
          type: 'success',
          title: 'Cadastrado sucesso!',
          confirmButtonText: 'LOGIN',
          cancelButtonText: 'SAIR',
          showCancelButton: true,

        }).then( (action) => {
          if (action.value) {
            this.props.history.push('/');
          }

          this.setState({
            isLogingIn: !this.state.isLogingIn
          });

        });

      } else {
        swal({
          type: 'error',
          title: 'Oops... algo deu errado!',
        });

        this.setState({
          isLogingIn: !this.state.isLogingIn
        });

      }

    });
  }

  render(){
    if ( this.props.location.pathname.indexOf('/login/cliente') > -1 ) {
      return(
        <div className="row">
          <div className="row">
            <div className="col-md-6 col-md-push-3">
              <article>
                <p>
                  Talvez o que você esteja procurando não precise de login, por acaso você precisa de alguma das opções abaixo?
                </p>
                <div className="d-flex flex-row justify-content-center">
                  <ul style={{ listStyleType: 'none', margin: '20px 0px', padding: '0px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <li><Link className="link-btn" to="http://www.google.com" target="_blank">Aviso de Sinistro</Link></li>
                    <li><Link className="link-btn" to="/seguradoras" >Guincho/Assistência</Link></li>
                    <li><Link className="link-btn" to="/cotacaoSeguro" >Cotar um Seguro</Link></li>
                  </ul>
                </div>
              </article>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 col-md-push-3">
              <form onSubmit={(e: any)=>this.handleSubmit(e)}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" name="login" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e: any) => this.handleChange(e)} />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Senha</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" name="password" placeholder="Password" onChange={(e: any) => this.handleChange(e)} />
                </div>
                <button type="submit" className="btn btn-primary" disabled={this.state.isLogingIn}>{this.state.isLogingIn ? 'AGUARDE...' : 'ENTRAR'}</button> <br/>
                <b> <Link to="/signup" >Cadastrar-me</Link> </b><br/>
                <b> <Link to="/" >Voltar</Link> </b>
              </form>
            </div>
          </div>
        </div>
      );
    } else if ( this.props.location.pathname.indexOf("/login/corretor") > -1 ) {
      return(
        <div className="row justify-content-center">
          <div className=" col-sm-12 col-md-6">
            <form onSubmit={(e: any)=>this.handleSubmit(e)}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" name="login" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e: any) => this.handleChange(e)} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Senha</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name="password" placeholder="Password" onChange={(e: any) => this.handleChange(e)} />
              </div>
              <button type="submit" className="btn btn-primary" disabled={this.state.isLogingIn}>{this.state.isLogingIn ? 'AGUARDE...' : 'ENTRAR'}</button><br />
            </form>
          </div>
        </div>
      );
      
    } else {
      return(
        <div className="row d-flex justify-content-center">
          <div className="col-md-6 col-md-push-3">
            <form onSubmit={(e: any)=> this.handleSubmitSignUp(e)}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" name="login" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e: any) => this.handleChange(e)} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Senha</label>
                <input type="password" className="form-control" id="exampleInputPassword1" name="password" placeholder="Password" onChange={(e: any) => this.handleChange(e)} />
              </div>
              <button type="submit" className="btn btn-primary" disabled={this.state.isLogingIn}>{this.state.isLogingIn ? 'AGUARDE...' : 'CADASTRAR'}</button><br />
              <b> <Link to="/" >Voltar</Link> </b>
            </form>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state: any) => {
  return {
    userInfo: state.login.user
  }
}

export default withRouter(connect(mapStateToProps, {saveUser})(Login));