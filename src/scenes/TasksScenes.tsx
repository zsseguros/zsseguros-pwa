import * as React from 'react';
import {Switch, Route} from 'react-router-dom';

const TasksScene =(props: any) => {
  return(
    <div className="col-12">
      <Switch>
        <Route path="/corretor/tarefas/adicionar" render={(props: any) => <div>adicionar</div> } />
        <Route path="/corretor/tarefas/listar" render={(props: any) => <div>listar</div> } />
      </Switch>
    </div>
  );
}

export default TasksScene;