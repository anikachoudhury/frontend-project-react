import React, { Component } from 'react';
import './FormUserDetails.css';

export class FormUserDetails extends Component {
     continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
    
        return (
            <div className="add">
                <h1>Add a new patient</h1>

                <form >
                    <label for="firstname">First Name:</label><br/>
                    <input type="text" id="firstname" name="firstname" onChange={handleChange('firstName')} defaultValue={values.firstName} required/><br/>

                    <label for="lastname">Last Name:</label><br/>
                    <input type="text" id="lastname" name="lastname" onChange={handleChange('lastName')} defaultValue={values.lastName} required/><br/>

                    <label for="sex">Sex:</label><br/>
                    <select id="sex" name="sex" onChange={handleChange('sex')} defaultValue={values.sex}>
                        <option>Select Option</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="other">Other</option>
                    </select><br/>

                    <label for="dob">Date of Birth:</label><br/>
                    <input type="date" id="dob" name="dob"  onChange={handleChange('dob')} defaultValue={values.dob} required/><br/>

                    <label for="age">Age:</label><br/>
                    <input type="text" id="age" name="age" onChange={handleChange('age')} defaultValue={values.age} required/><br/>

                    <label for="admission">Reason For Admission:</label><br/>
                    <textarea id="admission" name="admission" rows="5" cols="50" onChange={handleChange('reason')} defaultValue={values.reason} required/><br/>

                    <label for="doa">Date of Admission:</label><br/>
                    <input type="date" id="doa" name="doa" onChange={handleChange('doa')} defaultValue={values.doa} required/><br/>

                    <label for="covid">Covid Risk:</label><br/>
                    <select id="covid" name="covid" onChange={handleChange('covidRisk')} defaultValue={values.covidRisk}>
                        <option>Select Option</option>
                        <option value="high">High</option>
                        <option value="low">Low</option>
                        <option value="mid">Mid</option>
                    </select><br/>

                    <label for="risk">Risk Assessment:</label><br/>
                    <select id="risk" name="risk" onChange={handleChange('riskAssessment')} defaultValue={values.riskAssessment}>
                        <option>Select Option</option>
                        <option value="high risk">High Risk</option>
                        <option value="low risk">Low Risk</option>
                        <option value="mid risk">Mid Risk</option>
                    </select><br/>

                    <label for="doctor">Assign a Doctor:</label><br/>
                    <select id="doctor" name="doctor" onChange={handleChange('doctor')} defaultValue={values.doctor}>
                        <option>Select Option</option>
                        <option value="Doctor Chen">Doctor Chen</option>
                        <option value="Doctor Omar">Doctor Omar</option>
                        <option value="Doctor Ali">Doctor Ali</option>
                    </select><br/>

                    <label for="ward">Assign a Ward:</label><br/>
                    <select id="ward" name="ward" onChange={handleChange('ward')} defaultValue={values.ward} >
                        <option>Select Option</option>
                        <option value="Gynaecology">Gynaecology</option>
                        <option value="Renology">Renology</option>
                        <option value="Cardiology">Cardiology</option>
                    </select><br/>

                    
                </form>
                <input type="submit" class="addPatient" value="Add Patient" onClick={this.continue}></input>
            </div>
        )
    }
}

export default FormUserDetails
