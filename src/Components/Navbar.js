import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Navbar.css';
import {Link} from 'react-router-dom';

function Navbar() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <Link className="navbar-brand" to="/">
    <img className="Logo" src='./images/finalone.png' alt="logo" />
    </Link>
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
    <Link className="nav-link" to="/home">
    <li>INFO</li>
    </Link>
    <Link className="nav-link active" aria-current="page" to="/addpatient">
    <li>ADD PATIENT</li>
    </Link>
    
    <Link className="nav-link" to="/healthfacts">
    <li>TRAINING</li>
    </Link>
    
    <Link className="nav-link" to="/pin">
    <li>PIN BOARD</li>
    </Link>
    
    <Link className="nav-link" to="/">
    <li>LOGOUT</li>
    </Link>
    </ul>
    </div>
    </div>
    </nav>
    );
    }
    
    export default Navbar;
