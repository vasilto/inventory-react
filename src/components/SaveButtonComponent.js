import React, { Component } from 'react'
import {Button} from 'react-rainbow-components'

export default class SaveButtonComponent extends React.Component {
    render() {
        return (
            <Button
			shaded
			label="Запази"
			variant="success"
            type="submit"/>
        )
    }
}