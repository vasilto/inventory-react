import React, {useState} from 'react'
import {CheckboxToggle} from 'react-rainbow-components'

const CustomToggleComponent = (params) => {
    const [toggleComponentState, settoggleComponentState] = useState(true)

    function handleOnChange() {
        settoggleComponentState(!toggleComponentState)
    }

    function toggleComponent(params) {
        return <CheckboxToggle
            id={params.id}
            label={params.label}
            value={toggleComponentState} 
            onChange={handleOnChange}
            name={params.name}
        />
    }
    return(toggleComponent(params))
}

export default CustomToggleComponent;
