import { Component } from "react";
import React, { useState } from 'react';

import {Button} from 'react-rainbow-components'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/esm/Col';
import DatePickerComponent from './DatePicker.component'
import ResetButtonComponent from './ResetButton.component'
import SaveButtonComponent from './SaveButtonComponent'
import CustomSelectComponent from './CustomSelectComponent'
import CustomInputComponent from "./CustomInputComponent";
import CustomTextAreaComponent from "./CustomTextAreaComponent";
import CustomToggleComponent from "./CustomToggleComponent";
import './style.css'
const axios = require('axios').default;


export default class AddNewMedicament extends Component {
    constructor(props) {
        super(props);
    }

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
    ]

    types = [
        { value: 'antibiotic', label: 'Антибиотик' },
        { value: 'probiotic', label: 'Пробиотик' },
        { value: 'homeopatic', label: 'Хомеопатия' },
        { value: 'bilka', label: 'Билково (не инвазивно)' },
        { value: 'drug', label: 'Лекарство' },
        { value: 'other', label: 'Друго' }
        ]

    handleSubmit = (event) => {
        event.preventDefault()
        var medicament = {
            name: event.target.elements.mediName.value,
            manufacturer: event.target.elements.manufacturer.value,
            description: event.target.elements.mediDesc.value,
            type: event.target.elements.types.value,
            category:event.target.elements.categories.value,
            expirationDate: event.target.elements.expirationDatePicker.value,
            doesExpireAfterOpen: event.target.elements.doesExpireAfterOpen.checked,
            expirationDateAfterOpen:event.target.elements.AfterOpenExpirationDatePicker.value,
            isRunningOut: event.target.elements.isRunningOut.checked,
            isAvailable: event.target.elements.isAvailable.checked
        }
        console.log(medicament)

        const response = axios.post("http://localhost:5000/medicaments/add", medicament)
        .catch(err=> {
            console.error(err);
        })
    }

    handleDisableDatepicker = (event) => {
        event.preventDefault()
        debugger;
        console.log(event.target.elements.doesExpireAfterOpen.checked)
        return event.target.elements.doesExpireAfterOpen.checked
    }

    render(){

        return(
            <div className="App container">
                <Form id="add-medicament-form" onSubmit={this.handleSubmit}>
                    <Form.Row className="row-xs-3">  
                        <Col> 
                            <Form.Group>
                                <CustomSelectComponent 
                                name="categories"
                                options={this.categories}/>
                            </Form.Group>
                        </Col>
                        <Col> 
                            <Form.Group>
                                <CustomSelectComponent 
                                name="types"
                                options={this.types}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <CustomInputComponent
                            placeholder="Име на медикамента"
                            name="mediName"
                            />
                        </Col>
                        <Col>
                            <CustomInputComponent
                            placeholder="Производител"
                            name="manufacturer"
                            />
                        </Col>
                    </Form.Row> 
                    <Form.Row>
                        <Col>
                            <Form.Group controlId="medicamentDescription">
                                <CustomTextAreaComponent
                                placeholder="Описание" 
                                name="mediDesc"
                                rows={6}
                                />                                
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <DatePickerComponent
                                name="expirationDatePicker"
                                label="Годен до"/>
                            </Form.Group>

                            <Form.Group>
                                <DatePickerComponent
                                name="AfterOpenExpirationDatePicker"
                                label="годен до - след отваряне"
                                disabled="true"
                               />
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        
                        
                        <Col>
                            <Form.Row>
                                <CustomToggleComponent
                                id="tg-1"
                                name="isAvailable"
                                label="Налично ли е"/>
                            </Form.Row>
                            <Form.Row>
                                <CustomToggleComponent
                                id="tg-2"
                                name="doesExpireAfterOpen"
                                label="Разваля ли се след отваряне"/>
                            </Form.Row>

                            <Form.Row>
                                <CustomToggleComponent
                                id="tg-2"
                                name="isRunningOut"
                                label="Свършва ли"/>
                            </Form.Row>
                        </Col>

                        <Col>
                            <Form.Row className="rightSideDiv">
                            <Col>
                                <ResetButtonComponent/>
                            </Col>
                            
                            <Col>
                                <SaveButtonComponent/>
                            </Col>
                            </Form.Row>
                            
                        </Col>
                    </Form.Row>
                    
                </Form>
            </div>
        )   
    }   
}