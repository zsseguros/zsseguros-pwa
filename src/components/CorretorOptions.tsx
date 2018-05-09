import * as React from "react";
import {Link, withRouter} from 'react-router-dom';

const CorretorOptions = (props: any) => {
  return (
    <div className="col-12">
      <div className="row">
        <div className="col-12 my-5">
          <h2>
            Olá {props.userInfo ? props.userInfo.displayName : "ZSSEGUROS"}
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <div className="card">
            <div className="card-body">
              <h2 className="card-header">
                Clientes
              </h2>
              <p className="card-text">
                Gerencie seus clientes
              </p>
              <Link style={{ color: '#ffffff', margin: '0px' }} to="/corretor/listarClientes">
                <button className="btn btn-primary m-1">
                  Listar clientes
                </button>
              </Link>
              <Link style={{ color: '#ffffff', margin: '0px' }} to="/corretor/incluirCliente">
                <button className="btn btn-primary m-1">
                  Adicionar cliente
                </button>
              </Link>
              {/* <button className="btn btn-primary m-1">
                <Link style={{ color: '#ffffff', margin: '0px' }} to="/corretor/incluirCliente">Atualizar cliente</Link>
              </button> */}
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="card">
            <div className="card-body">
              <h2 className="card-header">
                Apolices
              </h2>
              <p className="card-text">
                Gerencie suas apólices
              </p>
              <Link style={{ color: '#ffffff', margin: '0px' }} to="/corretor/listarApolices">
                <button className="btn btn-primary m-1">
                Listar apólices
                </button>
              </Link>
              <Link style={{ color: '#ffffff', margin: '0px' }} to={`/corretor/incluirApolice?cod_cliente=${null}`}>
                <button className="btn btn-primary m-1">
                  Adicionar apólice
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default withRouter(CorretorOptions);
