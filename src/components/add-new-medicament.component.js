import React, { Component } from 'react';
import { Button, Notification } from 'react-rainbow-components';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DatePickerComponent from './DatePicker.component';
import ResetButtonComponent from './ResetButton.component';
import SaveButtonComponent from './SaveButtonComponent';
import CustomSelectComponent from './CustomSelectComponent';
import CustomInputComponent from './CustomInputComponent';
import CustomTextAreaComponent from './CustomTextAreaComponent';
import CustomToggleComponent from './CustomToggleComponent';
import './style.css';
const axios = require('axios').default;

export default class AddNewMedicament extends Component {
    state = {
        showToast: false,
        toastMessage: '',
        toastVariant: 'success'
    };

    categories = [
        { value: 'feverPain', label: 'Болка/Температура' },
        { value: 'rheum', label: 'Хрема' },
        { value: 'cough', label: 'Кашлица' },
        { value: 'soreThroat', label: 'Болки в гърлото' },
        { value: 'mussclePain', label: 'Болки в ставите, мускулите' },
        { value: 'antiAlergic', label: 'Противоалергични' },
        { value: 'sedatives', label: 'Успокоителни' },
        { value: 'immune', label: 'Имуностимулант' },
        { value: 'puke', label: 'Повръщане' },
        { value: 'indigestion', label: 'Разстройство' },
        { value: 'other', label: 'Друго' }
    ];

    types = [
        { value: 'antibiotic', label: 'Антибиотик' },
        { value: 'probiotic', label: 'Пробиотик' },
        { value: 'homeopatic', label: 'Хомеопатия' },
        { value: 'bilka', label: 'Билково (не инвазивно)' },
        { value: 'drug', label: 'Лекарство' },
        { value: 'other', label: 'Друго' }
    ];

    handleSubmit = async (event) => {
        event.preventDefault();
        const medicament = {
            name: event.target.elements.mediName.value,
            manufacturer: event.target.elements.manufacturer.value,
            description: event.target.elements.mediDesc.value,
            type: event.target.elements.types.value,
            category: event.target.elements.categories.value,
            expirationDate: event.target.elements.expirationDatePicker.value,
            doesExpireAfterOpen: event.target.elements.doesExpireAfterOpen.checked,
            expirationDateAfterOpen: event.target.elements.AfterOpenExpirationDatePicker.value,
            isRunningOut: event.target.elements.isRunningOut.checked,
            isAvailable: event.target.elements.isAvailable.checked
        };
        console.log(medicament);

        try {
            const response = await axios.post("http://localhost:5000/medicaments/add", medicament);
            console.log(response.data);
            this.setState({
                showToast: true,
                toastMessage: 'Medicament added successfully!',
                toastVariant: 'success'
            });
        } catch (err) {
            console.error(err);
            this.setState({
                showToast: true,
                toastMessage: `Error: ${err.response ? err.response.status : 'Network Error'}`,
                toastVariant: 'error'
            });
        }

        setTimeout(() => {
            this.setState({ showToast: false });
        }, 10000);
    };

    handleDisableDatepicker = (event) => {
        event.preventDefault();
        console.log(event.target.elements.doesExpireAfterOpen.checked);
        return event.target.elements.doesExpireAfterOpen.checked;
    };

    render() {
        return (
            <div className="App container">
                <Form id="add-medicament-form" onSubmit={this.handleSubmit}>
                    <Row className="row-xs-3">
                        <Col>
                            <Form.Group>
                                <CustomSelectComponent name="categories" options={this.categories} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <CustomSelectComponent name="types" options={this.types} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <CustomInputComponent placeholder="Име на медикамента" name="mediName" />
                        </Col>
                        <Col>
                            <CustomInputComponent placeholder="Производител" name="manufacturer" />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group controlId="medicamentDescription">
                                <CustomTextAreaComponent placeholder="Описание" name="mediDesc" rows={6} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <DatePickerComponent name="expirationDatePicker" label="Годен до" />
                            </Form.Group>
                            <Form.Group>
                                <DatePickerComponent name="AfterOpenExpirationDatePicker" label="годен до - след отваряне" disabled={true} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <CustomToggleComponent id="tg-1" name="isAvailable" label="Налично ли е" />
                            </Row>
                            <Row>
                                <CustomToggleComponent id="tg-2" name="doesExpireAfterOpen" label="Разваля ли се след отваряне" />
                            </Row>
                            <Row>
                                <CustomToggleComponent id="tg-2" name="isRunningOut" label="Свършва ли" />
                            </Row>
                        </Col>
                        <Col>
                            <Row className="rightSideDiv">
                                <Col>
                                    <ResetButtonComponent />
                                </Col>
                                <Col>
                                    <SaveButtonComponent />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Form>
                {this.state.showToast && (
                    <Notification
                        title={this.state.toastMessage}
                        description=""
                        icon={this.state.toastVariant === 'success' ? 'success' : 'error'}
                        onRequestClose={() => this.setState({ showToast: false })}
                        variant={this.state.toastVariant}
                    />
                )}
            </div>
        );
    }
}