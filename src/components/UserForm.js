import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import ComfirmDetails, { ConfirmDetails } from './ConfirmDetails';

export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        sex: '',
        dob: '',
        age: '',
        reason: '',
        doa: '',
        covidRisk: '',
        riskAssessment: '',
        doctor: '',
        ward: ''
    }

    nextStep = () => {
        const { step } = this.state; //destructuring step out of state which is in the object above
        this.setState({
            step: step + 1
        });
    }

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    handleChange = input => e => {
        this.setState({[input]: e.target.value })
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, sex, dob, age, reason, doa, covidRisk, riskAssessment, doctor, ward } = this.state;
        const values = {firstName, lastName, sex, dob, age, reason, doa, covidRisk, riskAssessment, doctor, ward}

        switch(step) {
            case 1: 
                return (
                    <FormUserDetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <ConfirmDetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            default:
                return (
                    <FormUserDetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
        }
        
    }
}

export default UserForm
