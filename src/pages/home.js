import React from 'react';
import './home.css';
import doctor from '../images/undraw_doctor_kw5l.png'
function home() {
    return (
        <div>
            <div className='header-wrapper'>
            <div className="main-info jumbotron">
                <h1> Welcome to Bicomaas Health </h1>
                <div className="doctorimg">
                <img src={doctor} alt="doctor"></img>
                </div>
            </div>
        </div>
        </div>
    )
}

export default home
