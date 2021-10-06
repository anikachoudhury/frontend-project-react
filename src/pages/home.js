import React from 'react';
import './home.css';

function home() {
    return (
        <div>
        <div className='homeBackground'>
            <div className='header-wrapper'>
            <div className="main-info jumbotron">
                
        <div className="homeBackground">
    <section className="homebody">
    <br/><h2> <img className="homeimages" src='./images/addingdata.png' width = "150" height = "150" alt="logo" />ADD PATIENT</h2>
    <p className='hometext'>Please revert to this page if you would like to add a new patient to the database. 
You can also book an appointment for a patient through this page and check their current prescriptions.</p>
    <h2><img className="homeimages" src='./images/traininglogo.png' width = "150" height = "150" alt="logo" />TRAINING</h2>
    <p className='hometext'>Please ensure you check this page regularly for upcoming events as well as any mandatory training needed 
    for to attend.</p>
    <h2><img className="homeimages" src='./images/pinboard.png' width = "150" height = "150" alt="logo" />PIN BOARD</h2>
    <p className='hometext'>Feel free to drop your thoughts! Whether you want to drop a nice compliment to another member of staff or if you would like to leave some constructive feedback. 
    Entries only last for a limited time and are anonymous.</p>
    </section>
            </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default home;
