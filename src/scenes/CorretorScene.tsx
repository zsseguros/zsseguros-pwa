import * as React from 'react';
import {connect} from 'react-redux';
import CorretorOptions from '../components/CorretorOptions';
import {Switch, Route, withRouter} from 'react-router-dom';
import InsertCliente from './InsertClienteScene';

class Corretor extends React.Component<any, any>{
  render(){
    return(
      <div className="row">
        <Switch>
          <Route exact path="/corretor" component={CorretorOptions}/>
          <Route path="/corretor/incluirCliente" component={InsertCliente}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    userInfo: state.login.user
  }
}

export default withRouter(connect(mapStateToProps, null)(Corretor));