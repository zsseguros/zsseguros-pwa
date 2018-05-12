import * as React from "react";
import { Link } from "react-router-dom";
import * as moment from 'moment';

const NavBar = (props: any) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      id="mainNav"
    >
      <Link className="navbar-brand" to="/corretor">
        ZSSEGUROS
      </Link>
      <button
        className="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
           <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle mr-lg-2"
              id="messagesDropdown"
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-fw fa-envelope" ></i>
              {
                props.getListTasksSuccess && props.getListTasksSuccess.rows.length > 0 ?
                  <span className="indicator text-primary d-none d-lg-block">
                    <i className="fa fa-fw fa-circle" ></i>
                  </span>
                :
                  null
              }
            </a>
            <div className="dropdown-menu" aria-labelledby="messagesDropdown">
            {
              props.getListTasksSuccess && props.getListTasksSuccess.rows.length > 0 ?
                <span>
                <h6 className="dropdown-header">Novas Tarefas:</h6>
                  <div className="dropdown-divider" ></div>
                  {
                    props.getListTasksSuccess.rows.reverse().slice(0, 3).map( (task, index) => {
                      return(
                        <span className="dropdown-item" key={Number(task.cod_tarefa)}>
                          <strong>{task.titulo}</strong><br/>
                          <span className="small text-muted">Expira em: {moment(task.dt_final).format('DD-MM-YYYY')}</span>
                          <div className="dropdown-message small">
                            {
                              task.descricao
                            }
                          </div>
                        </span>                        
                      )
                    })
                  }
                  <Link className="dropdown-item small" to="/corretor/tarefas/listar">
                    Ver todas
                  </Link>
                </span>       
            :
              null
            }
              
            </div>
          </li>
          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle mr-lg-2"
              id="alertsDropdown"
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-fw fa-bell" />

              <span className="indicator text-warning d-none d-lg-block">
                <i className="fa fa-fw fa-circle" />
              </span>
            </a>
            <div className="dropdown-menu" aria-labelledby="alertsDropdown">
              <h6 className="dropdown-header">New Alerts:</h6>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                <span className="text-success">
                  <strong>
                    <i className="fa fa-long-arrow-up fa-fw" />Status Update
                  </strong>
                </span>
                <span className="small float-right text-muted">11:21 AM</span>
                <div className="dropdown-message small">
                  This is an automated server response message. All systems are
                  online.
                </div>
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                <span className="text-danger">
                  <strong>
                    <i className="fa fa-long-arrow-down fa-fw" />Status Update
                  </strong>
                </span>
                <span className="small float-right text-muted">11:21 AM</span>
                <div className="dropdown-message small">
                  This is an automated server response message. All systems are
                  online.
                </div>
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                <span className="text-success">
                  <strong>
                    <i className="fa fa-long-arrow-up fa-fw" />Status Update
                  </strong>
                </span>
                <span className="small float-right text-muted">11:21 AM</span>
                <div className="dropdown-message small">
                  This is an automated server response message. All systems are
                  online.
                </div>
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item small" href="#">
                View all alerts
              </a>
            </div>
          </li> */}
          <li className="nav-item">
            <div className="" style={{ width: '250px' }} ></div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-toggle="modal"
              data-target="#exampleModal"
              onClick={(e: any) => props.logOut()}
            >
              <i className="fas fa-sign-out-alt" />&nbsp;Sair
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
