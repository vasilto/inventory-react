import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DatePickerComponent from '../DatePicker.component';
import axios from 'axios';

export default class AddPatient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            dateOfBirth: new Date(),
            gender: '',
            validated: false
        };
    }

    handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        } else {
            event.preventDefault();
            const patient = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                dateOfBirth: this.state.dateOfBirth,
                gender: this.state.gender
            };
            try {
                const response = await axios.post('http://localhost:5000/patients/create', patient);
                console.log('Patient created:', response.data);
            } catch (error) {
                console.error('Error creating patient:', error);
            }
        }
        this.setState({ validated: true });
    };

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleDateChange = (date) => {
        this.setState({ dateOfBirth: date });
    };

    render() {
        const { firstName, lastName, dateOfBirth, gender, validated } = this.state;

        return (
            <div className="container">
                <Form noValidate validated={validated} onSubmit={this.handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group controlId="formFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter first name"
                                    name="firstName"
                                    value={firstName}
                                    onChange={this.handleChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a first name.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Enter last name"
                                    name="lastName"
                                    value={lastName}
                                    onChange={this.handleChange}
                                />
                                <Form.Control.Feedback type="invalid">
                                    Please provide a last name.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="formDateOfBirth">
                                <Form.Label>Date of Birth</Form.Label>
                                <DatePickerComponent
                                    name="dateOfBirth"
                                    label="Date of Birth"
                                    value={dateOfBirth}
                                    onChange={this.handleDateChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formGender">
                                <Form.Label column={1}>Gender</Form.Label>
                                <Form.Control
                                    as="select"
                                    name="gender"
                                    value={gender}
                                    onChange={this.handleChange}
                                    required
                                >
                                    <option value="">Select gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    Please select a gender.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button type="submit">Submit</Button>
                </Form>
            </div>
        );
    }
}