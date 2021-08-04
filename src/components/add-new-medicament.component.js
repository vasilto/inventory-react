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


export default class AddNewMedicament extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit = (event) => {
        event.preventDefault()
        var medicament = {
            type: event.target.elements.selectComponent.value,
            name: event.target.elements.mediName.value,
            link: event.target.elements.mediList.value,
            description: event.target.elements.mediDesc.value,
            isAvailable: event.target.elements.isAvailable.checked,
            doesExpireAfterOpen: event.target.elements.doesExpireAfterOpen.checked,
            expirationDate: event.target.elements.datePicker.value
        }
        console.log(medicament)

    }



    render(){

        return(
            <div className="App container">
                <Form id="add-medicament-form" onSubmit={this.handleSubmit}>
                    <Form.Row className="row-xs-3">  
                        <Col> 
                            <Form.Group>
                                <CustomSelectComponent name="selectComponent"/>
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
                            placeholder="Линк към листовката"
                            name="mediList"
                            />
                        </Col>
                    </Form.Row> 
                    <Form.Row>
                        <Col>
                            <Form.Group controlId="medicamentDescription">
                                <CustomTextAreaComponent
                                placeholder="Описание" 
                                name="mediDesc"
                                />                                
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        
                        <Col>
                            <Form.Group>
                                <DatePickerComponent
                                name="datePicker"/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Row>
                                <CustomToggleComponent
                                id="tg-1"
                                name="isAvailable"
                                label="налично ли е"/>
                            </Form.Row>
                            <Form.Row>
                                <CustomToggleComponent
                                id="tg-2"
                                name="doesExpireAfterOpen"
                                label="налично ли е2"/>
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