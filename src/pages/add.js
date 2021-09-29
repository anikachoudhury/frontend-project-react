import React from 'react';

function add() {
    return (
        <div className="add">
            <h1>Add a new patient</h1>

            <form>
                <label for="firstname">First Name:</label>
                <input type="text" id="firstname" name="firstname"></input><br/>

                <label for="lastname">Last Name:</label>
                <input type="text" id="lastname" name="lastname"></input><br/>

                <label for="sex">Sex:</label>
                <select id="sex" name="sex">
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                </select><br/>

                <label for="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob"></input><br/>

                <label for="age">Age:</label>
                <input type="text" id="age" name="age"></input><br/>

                <label for="admission">Reason For Admission:</label><br/>
                <textarea id="admission" name="admission" rows="5" cols="50"></textarea><br/>

                <label for="doa">Date of Admission:</label>
                <input type="date" id="doa" name="doa"></input><br/>

                <label for="covid">Covid Risk:</label>
                <select id="covid" name="covid">
                    <option value="high">High</option>
                    <option value="low">Low</option>
                    <option value="mid">Mid</option>
                </select><br/>

                <label for="risk">Risk Assessment:</label>
                <select id="risk" name="risk">
                    <option value="highrisk">High Risk</option>
                    <option value="lowrisk">Low Risk</option>
                    <option value="midrisk">Mid Risk</option>
                </select><br/>

                <label for="doctor">Assign a Doctor:</label>
                <select id="doctor" name="doctor">
                    <option value="doc1">doc 1</option>
                    <option value="doc2">doc 2</option>
                    <option value="doc3">doc 3</option>
                </select><br/>

                <label for="ward">Assign a Ward:</label>
                <select id="ward" name="ward">
                    <option value="ward1">ward 1</option>
                    <option value="ward2">ward 2</option>
                    <option value="ward3">ward 3</option>
                </select><br/>
            </form>
        </div>
    )
}

export default add;

