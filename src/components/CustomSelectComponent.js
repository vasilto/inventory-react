import React, {useState} from 'react'
import {Select} from 'react-rainbow-components'

const CustomSelectComponent = (params) => {
    const options = params.options;

    const [option, setOption] = useState(options[0]);

    function HandleOnChange(event){
        setOption(event.target.value);
    }
    
    function CustomSelect(params) {
        return <Select
        options={options}
        value={option}
        onChange={HandleOnChange}
        id={params.id}
        name={params.name}
        />
    }

    return (
        CustomSelect(params)
    )
}

export default CustomSelectComponent
