import React, {useState} from 'react';
import './Add.css';

function Add(props) {
    const [fname, setFname] = useState(" ");
    const [lname, setLname] = useState(" ");
    const [sex, setSex] = useState(" ");
    const [dob, setDob] = useState(" ");
    const [age, setAge] = useState(" ");
    const [reason, setReason] = useState(" ");
    const [admit, setAdmit] = useState(" ");
    const [covid, setCovid] = useState(" ");
    const [risk, setRisk] = useState(" ");
    const [doc, setDoc] = useState(" ");
    const [ward, setWard] = useState(" ");

    const handleNewPatient = (e) => {
        e.preventDefault();
    
    }

    return (
        <div className="addBackground">
        <div className="add">
            <h1>ADD A NEW PATIENT</h1>

            <form onSubmit={handleNewPatient}>
                <label for="firstname">First Name:</label><br/>
                <input type="text" id="firstname" name="firstname" value={fname} onChange={e => setFname(e.target.value)} required/><br/>

                <label for="lastname">Last Name:</label><br/>
                <input type="text" id="lastname" name="lastname" value={lname} onChange={e => setLname(e.target.value)} required/><br/>

                <label for="sex">Sex:</label><br/>
                <select id="sex" name="sex" value={sex} onChange={e => setSex(e.target.value)}>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                    <option value="other">Other</option>
                </select><br/>

                <label for="dob">Date of Birth:</label><br/>
                <input type="date" id="dob" name="dob" value={dob} onChange={e => setDob(e.target.value)} required/><br/>

                <label for="age">Age:</label><br/>
                <input type="text" id="age" name="age" value={age} onChange={e => setAge(e.target.value)} required/><br/>

                <label for="admission">Reason For Admission:</label><br/>
                <textarea id="admission" name="admission" rows="5" cols="50" value={reason} onChange={e => setReason(e.target.value)} required/><br/>

                <label for="doa">Date of Admission:</label><br/>
                <input type="date" id="doa" name="doa" value={admit} onChange={e => setAdmit(e.target.value)} required/><br/>

                <label for="covid">Covid Risk:</label><br/>
                <select id="covid" name="covid" value={covid} onChange={e => setCovid(e.target.value)}>
                    <option value="high">High</option>
                    <option value="low">Low</option>
                    <option value="mid">Mid</option>
                </select><br/>

                <label for="risk">Risk Assessment:</label><br/>
                <select id="risk" name="risk" value={risk} onChange={e => setRisk(e.target.value)}>
                    <option value="highrisk">High Risk</option>
                    <option value="lowrisk">Low Risk</option>
                    <option value="midrisk">Mid Risk</option>
                </select><br/>

                <label for="doctor">Assign a Doctor:</label><br/>
                <select id="doctor" name="doctor" value={doc} onChange={e => setDoc(e.target.value)}>
                    <option value="doc1">doc 1</option>
                    <option value="doc2">doc 2</option>
                    <option value="doc3">doc 3</option>
                </select><br/>

                <label for="ward">Assign a Ward:</label><br/>
                <select id="ward" name="ward" value={ward} onChange={e => setWard(e.target.value)}>
                    <option value="ward1">ward 1</option>
                    <option value="ward2">ward 2</option>
                    <option value="ward3">ward 3</option>
                </select><br/>

                <input type="submit" class="addPatient" value="Add Patient" onSubmit={handleNewPatient}></input>
            </form>

            <div className="searchpatient">
                <table>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Sex</th>
                    <th>Date of Birth</th>
                    <th>Age</th>
                    <th>Reason for Admission</th>
                    <th>Date of Admission</th>
                    <th>Covid Risk</th>
                    <th>Risk Assessment</th>
                    <th>Doctor</th>
                    <th>Ward</th>
                </tr>
                </table>
            </div>
        </div>
        </div>
    )
}

export default Add;

