import React, {useState} from 'react'
import {Select} from 'react-rainbow-components'


const options = [
    { value: 'option 1', label: 'Option 1' },
    { value: 'option 2', label: 'Option 2' },
    { value: 'option 3', label: 'Option 3' },
];

const CustomSelectComponent = (params) => {
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
