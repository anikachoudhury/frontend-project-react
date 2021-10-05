import React, { Component } from 'react'

export class ConfirmDetails extends Component {
    render() {

        const { values: { firstName, lastName, sex, dob, age, reason, doa, covidRisk, riskAssessment, doctor, ward } } = this.props;
        return (
            <div className="confirm">
                <ul>
                    <li>First Name: {firstName}</li>
                    <li>Last Name: {lastName}</li>
                    <li>Sex: {sex}</li>
                    <li>Date of Birth: {dob}</li>
                    <li>Age: {age}</li>
                    <li>Reason For Admission: {reason}</li>
                    <li>Date of Admission: {doa}</li>
                    <li>Covid Risk: {covidRisk}</li>
                    <li>Risk Assessment: {riskAssessment}</li>
                    <li>Doctor: {doctor}</li>
                    <li>Ward: {ward}</li>
                </ul>
            </div>
        )
    }
}

export default ConfirmDetails;
