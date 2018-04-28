import * as React from "react";
import { Link } from "react-router-dom";

const NavBar = (props: any) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      id="mainNav"
    >
      <a className="navbar-brand" href="index.html">
        ZSSEGUROS
      </a>
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
        <ul className="navbar-nav navbar-sidenav">
          <li
            className="nav-item"
            data-toggle="tooltip"
            data-placement="right"
            title="Dashboard"
          >
            <Link to="/corretor">
              <i className="fas fa-columns mx-1" />
              <span className="nav-link-text text-light mx-1">Dashboard</span>
            </Link>
          </li>

          <li
            className="nav-item"
            data-toggle="tooltip"
            data-placement="right"
            title="Components"
          >
            <a
              className="nav-link nav-link-collapse collapsed"
              data-toggle="collapse"
              href="#collapseComponents"
              data-parent="#exampleAccordion"
            >
              <i className="fa fa-fw fa-wrench" />
              <span className="nav-link-text">Components</span>
            </a>
            <ul
              className="sidenav-second-level collapse"
              id="collapseComponents"
            >
              <li>
                <a href="navbar.html">Navbar</a>
              </li>
              <li>
                <a href="cards.html">Cards</a>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="navbar-nav sidenav-toggler">
          <li className="nav-item" onClick={e => props.toggleNavBar(e)}>
            <a className="nav-link text-center" id="sidenavToggler">
              <i className="fa fa-fw fa-angle-left" />
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          {/* <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle mr-lg-2"
              id="messagesDropdown"
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-fw fa-envelope" />
              <span className="d-lg-none">
                Messages
                <span className="badge badge-pill badge-primary">12 New</span>
              </span>
              <span className="indicator text-primary d-none d-lg-block">
                <i className="fa fa-fw fa-circle" />
              </span>
            </a>
            <div className="dropdown-menu" aria-labelledby="messagesDropdown">
              <h6 className="dropdown-header">New Messages:</h6>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                <strong>David Miller</strong>
                <span className="small float-right text-muted">11:21 AM</span>
                <div className="dropdown-message small">
                  Hey there! This new version of SB Admin is pretty awesome!
                  These messages clip off when they reach the end of the box so
                  they don't overflow over to the sides!
                </div>
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                <strong>Jane Smith</strong>
                <span className="small float-right text-muted">11:21 AM</span>
                <div className="dropdown-message small">
                  I was wondering if you could meet for an appointment at 3:00
                  instead of 4:00. Thanks!
                </div>
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                <strong>John Doe</strong>
                <span className="small float-right text-muted">11:21 AM</span>
                <div className="dropdown-message small">
                  I've sent the final files over to you for review. When you're
                  able to sign off of them let me know and we can discuss
                  distribution.
                </div>
              </a>
              <div className="dropdown-divider" />
              <a className="dropdown-item small" href="#">
                View all messages
              </a>
            </div>
          </li> */}
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
