import React, {useState} from 'react'
import {Input, Textarea} from 'react-rainbow-components'

import { render } from 'react-dom'

const CustomInputComponent = (params) => {
    const [state, setState] = useState("")

    function handleChange(event) {
        setState(event.target.value)
    }

    function inputComponent(params) {
        return <Input
        placeholder={params.placeholder}
        type="text"
        name={params.name}
        value={state.value}
        onChange={handleChange}
        />
    }

    return (
        inputComponent(params)
    )
}

export default CustomInputComponent;