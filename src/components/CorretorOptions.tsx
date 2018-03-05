import * as React from "react";
import {Link} from 'react-router-dom';

const CorretorOptions = (props: any) => {
  return (
    <div className="col-md-12">
      <div className="row">
        <div className="col-md-4 col-md-push-4">
          <h2>
            Olá {props.userInfo ? props.userInfo.displayName : "---"}
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="well well-info">
            <Link to="/corretor/incluirCliente">Listar clientes</Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="well well-info">
            <Link to="/corretor/incluirCliente">Adicionar clientes</Link>
          </div>
        </div>
        <div className="col-md-4">
          <div className="well well-info">
            <Link to="/corretor/incluirCliente">Atualizar clientes</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorretorOptions;
