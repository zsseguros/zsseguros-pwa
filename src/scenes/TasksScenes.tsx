import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import InsertTaskScene from 'appSrc/scenes/InsertTaskScene';
import ListTasksScene from 'appSrc/scenes/ListTasksScene';

const TasksScene =(props: any) => {
  return(
    <div className="col-12">
      <Switch>
        <Route path="/corretor/tarefas/adicionar" component={InsertTaskScene} />
        <Route path="/corretor/tarefas/listar" component={ListTasksScene} />
      </Switch>
    </div>
  );
}

export default TasksScene;