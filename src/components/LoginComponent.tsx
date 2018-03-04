import * as React from 'react';
import {withRouter} from 'react-router';
import {fbLogin} from '../APIs/firebase';
import {connect} from 'react-redux';
import { saveUid } from '../actions/loginActions';
import swal from 'sweetalert2';
import {Link} from 'react-router-dom';

interface LoginState {
  userType: number;
  payload: {
    login: string;
    password: string;
  };

}

class Login extends React.Component<any, LoginState>{

  constructor(props: any){
    super(props);

    this.state = {
      userType: 99,
      payload: {
        login: '',
        password: ''
      }
    }
  }

  componentDidMount(){
    if ( this.props.location.pathname.indexOf("/cliente") ) {
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
    if ( !this.props.uidToken && nextProps.uidToken !== null ) {
      this.props.history.push(this.state.userType === 0 ? '/cliente' : '/corretor');
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

    fbLogin(this.state.payload.login, this.state.payload.password, (userInfo) => {

      if ( userInfo ) {
        userInfo.getIdToken(true).then( (idToken: any) => {
          this.props.saveUid(idToken);
        })
        .catch( (error) => {
  
          swal({
            type: 'error',
            title: 'Oops...',
            text: 'Error: '+error
          });
        });
      } else {
        swal({
          type: 'error',
          title: 'Falha no login!',
          text: 'Usuário não encontrado!'
        });
      }

    });
  }

  render(){
    if ( this.props.location.pathname.indexOf('cliente') > -1 ) {
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
        <div className="row">
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
              <button type="submit" className="btn btn-primary">ENTRAR</button>
            </form>
          </div>
        </div>
        </div>
      );
    } else {
      return(
        <div className="row">
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
              <button type="submit" className="btn btn-primary">ENTRAR</button>
            </form>
          </div>
        </div>
      );
      
    }
  }
}

const mapStateToProps = (state: any) => {
  return {
    uidToken: state.login.uidToken
  }
}

export default withRouter(connect(mapStateToProps, {saveUid})(Login));