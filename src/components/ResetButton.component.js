import React, { Component } from 'react'
import {Button} from 'react-rainbow-components'


export default class ResetButtonComponent extends React.Component {
   
    resetForm = () => {
        document.getElementById("add-medicament-form").reset();
    }

    render() {
        return (
            <Button
            shaded
            label="Reset"
            onClick={this.resetForm}
            variant="brand"
            />
        )
    }
}
