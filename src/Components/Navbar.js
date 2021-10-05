import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//bootstrap framework that gives lots of UI elements - npm install bootstrap

function Navbar() {
  //create a Navbar function
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Bicomaas Health
        </a>
       <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home Page
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Add Paitent
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Search Patient
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Training
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pin Board
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Staff
              </a>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <a class="dropdown-item" href="#">
                  Login
                </a>
                <a class="dropdown-item" href="#">
                  Logout
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

  </nav>
  );
}

export default Navbar;
