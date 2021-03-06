import * as React from 'react';
import {connect} from 'react-redux';
import CorretorOptions from '../components/CorretorOptions';
import {Switch, Route, withRouter} from 'react-router-dom';
import InsertCliente from './InsertClienteScene';
import ListClientes from './ListClientes';
import InsertApolice from './InsertApolice';
import ListApolices from './ListApolices';
import ClienteDetails from './ClienteDetails';
import ApoliceDetails from 'appSrc/scenes/ApoliceDetails';
import TasksScene from 'appSrc/scenes/TasksScenes';
import UpdateApolice from 'appSrc/scenes/UpdateApoliceScene';
import UpdateApoliceScene from 'appSrc/scenes/UpdateApoliceScene';
import UpdateClient from 'appSrc/scenes/UpdateClientScene';

class Corretor extends React.Component<any, any>{
  render(){
    return(
      <div className="row justify-content-center" style={{ width: '100vw' }} >
        <Switch>
          <Route exact path="/corretor" component={CorretorOptions}/>
          <Route exact path="/corretor/incluirCliente" component={InsertCliente} />
          <Route exact path="/corretor/listarClientes" component={ListClientes} />
          <Route exact path="/corretor/cliente/:clientId" component={ClienteDetails} />
          <Route exact path="/corretor/cliente/alterar/:clientId" component={UpdateClient} />
          <Route exact path="/corretor/incluirApolice" component={InsertApolice} />
          <Route exact path="/corretor/listarApolices" component={ListApolices} />
          <Route exact path="/corretor/apolice/:apoliceId" component={ApoliceDetails} />
          <Route exact path="/corretor/apolice/alterar/:apoliceId" component={UpdateApoliceScene} />
          <Route path="/corretor/tarefas" component={TasksScene} />
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