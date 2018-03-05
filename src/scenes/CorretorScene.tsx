import * as React from 'react';
import {connect} from 'react-redux';

class Corretor extends React.Component<any, any>{
  render(){
    return(
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-4 col-md-push-4">
            <h2>
              Olá {this.props.userInfo ? this.props.userInfo.displayName : '---'}
            </h2>
          </div>  
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="well well-info">
              Listar clientes
            </div>
          </div>
          <div className="col-md-4">
            <div className="well well-info">
              Adicionar clientes
            </div>
          </div>
          <div className="col-md-4">
            <div className="well well-info">
              Atualizar clientes
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    userInfo: state.login.user
  }
}

export default connect(mapStateToProps, null)(Corretor);