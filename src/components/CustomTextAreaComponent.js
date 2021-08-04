import React, {useState} from 'react'
import {Input, Textarea} from 'react-rainbow-components'

const CustomTextAreaComponent = (params) => {
    const [textAreaState, settextAreaState] = useState("")

    function handleOnChange(event) {
        settextAreaState(event.target.value)
    }
        function textAreaComponent(params) {
            return <Textarea 
            placeholder={params.placeholder}
            name={params.name}
            onChange={handleOnChange}
            value={textAreaState.value}
            />
    }
    return (textAreaComponent(params))

}


export default CustomTextAreaComponent;