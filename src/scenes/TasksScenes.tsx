import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import InsertTaskScene from 'appSrc/scenes/InsertTaskScene';

const TasksScene =(props: any) => {
  return(
    <div className="col-12">
      <Switch>
        <Route path="/corretor/tarefas/adicionar" component={InsertTaskScene} />
        <Route path="/corretor/tarefas/listar" render={(props: any) => <div>listar</div> } />
      </Switch>
    </div>
  );
}

export default TasksScene;