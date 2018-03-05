import * as React from 'react';
import {connect} from 'react-redux';
import CorretorOptions from '../components/CorretorOptions';
import {Switch, Route} from 'react-router-dom';

class Corretor extends React.Component<any, any>{
  render(){
    return(
      <div className="row">
        <Switch>
          <Route exact path="/corretor" component={CorretorOptions}/>
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

export default connect(mapStateToProps, null)(Corretor);