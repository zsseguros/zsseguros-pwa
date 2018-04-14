import * as React from "react";
import {Link, withRouter} from 'react-router-dom';

const CorretorOptions = (props: any) => {
  return (
    <div className="col-md-12">
      <div className="row">
        <div className="col-12 my-5">
          <h2>
            Olá {props.userInfo ? props.userInfo.displayName : "ZSSEGUROS"}
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-header">
                Clientes
              </h2>
              <p className="card-text">
                Gerencie seus clientes
              </p>
              <button className="btn btn-primary m-1">
                <Link style={{ color: '#ffffff' }} to="/corretor/incluirCliente">Listar clientes</Link>
              </button>
              <button className="btn btn-primary m-1">
                <Link style={{ color: '#ffffff' }} to="/corretor/incluirCliente">Adicionar clientes</Link>
              </button>
              <button className="btn btn-primary m-1">
                <Link style={{ color: '#ffffff' }} to="/corretor/incluirCliente">Atualizar clientes</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-header">
                Apolices
              </h2>
              <p className="card-text">
                Gerencie suas apólices
              </p>
              <button className="btn btn-primary m-1">
                <Link style={{ color: '#ffffff' }} to="/corretor/incluirCliente">Listar apólices</Link>
              </button>
              <button className="btn btn-primary m-1">
                <Link style={{ color: '#ffffff' }} to="/corretor/incluirCliente">Adicionar apólice</Link>
              </button>
              <button className="btn btn-primary m-1">
                <Link style={{ color: '#ffffff' }} to="/corretor/incluirCliente">Atualizar apólice</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h2 className="card-header">
                Clientes
              </h2>
              <p className="card-text">
                Gerencie seus clientes
              </p>
              <button className="btn btn-primary m-1">
                <Link style={{ color: '#ffffff' }} to="/corretor/incluirCliente">Listar clientes</Link>
              </button>
              <button className="btn btn-primary m-1">
                <Link style={{ color: '#ffffff' }} to="/corretor/incluirCliente">Adicionar clientes</Link>
              </button>
              <button className="btn btn-primary m-1">
                <Link style={{ color: '#ffffff' }} to="/corretor/incluirCliente">Atualizar clientes</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CorretorOptions);
