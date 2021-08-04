import React, { Component } from 'react'
import {Select} from 'react-rainbow-components'

const containerStyles = {
	width: 250,
};

const options = [
    { value: 'option 1', label: 'Option 1' },
    { value: 'option 2', label: 'Option 2' },
    { value: 'option 3', label: 'Option 3' },
];
let optionValue;


export default class SelectMedicamentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            optionValue:""
        }
    }

    setOptionValue(event){
        event= () => this.setState({optionValue:this.value});
        console.log(optionValue)
    }

    customSelect(params){
        return <Select
        options={options}
        id={params.id}
        onChange={this.setOptionValue}
        />
    }

    render() {
        return (
                this.customSelect(this.params)
        )
    }
}
