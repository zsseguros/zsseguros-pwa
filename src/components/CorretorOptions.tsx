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
                <Link style={{ color: '#ffffff', margin: '0px' }} to="/corretor/listarClientes">Listar clientes</Link>
              </button>
              <button className="btn btn-primary m-1">
                <Link style={{ color: '#ffffff', margin: '0px' }} to="/corretor/incluirCliente">Adicionar cliente</Link>
              </button>
              <button className="btn btn-primary m-1">
                <Link style={{ color: '#ffffff', margin: '0px' }} to="/corretor/incluirCliente">Atualizar cliente</Link>
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
                <Link style={{ color: '#ffffff', margin: '0px' }} to="/corretor/apolice/listarApolice">Listar apólices</Link>
              </button>
              <button className="btn btn-primary m-1">
                <Link style={{ color: '#ffffff', margin: '0px' }} to="/corretor/apolice/incluirApolice">Adicionar apólice</Link>
              </button>
              <button className="btn btn-primary m-1">
                <Link style={{ color: '#ffffff', margin: '0px' }} to="/corretor/apolice/atualizarApolice">Atualizar apólice</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
        <div className="card text-white bg-primary o-hidden h-100">
            <div className="card-body">
              <div className="card-body-icon">
                <i className="fa fa-fw fa-comments"></i>
              </div>
              <div className="mr-5">26 New Messages!</div>
            </div>
            <a className="card-footer text-white clearfix small" href="#">
              <span className="">View Details</span>
              <span className="">
                <i className="fa fa-angle-right"></i>
              </span>
            </a>
          </div>
          {/* <div className="card">
            <div className="card-body">
              <h2 className="card-header">
                Clientes
              </h2>
              <p className="card-text">
                Gerencie seus clientes
              </p>
              <button className="btn btn-primary m-1">
                <Link style={{ color: '#ffffff', margin: '0px' }} to="/corretor/listarClientes">Listar clientes</Link>
              </button>
              <button className="btn btn-primary m-1">
                <Link style={{ color: '#ffffff', margin: '0px' }} to="/corretor/incluirCliente">Adicionar cliente</Link>
              </button>
              <button className="btn btn-primary m-1">
                <Link style={{ color: '#ffffff', margin: '0px' }} to="/corretor/incluirCliente">Atualizar cliente</Link>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default withRouter(CorretorOptions);
