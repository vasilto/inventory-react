import React, { useCallback, useState } from 'react';
import '../App.css';
// REACT BOOTSTRAP COMPONENTS
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// BOOTSTRAP LIBRARY
import 'bootstrap/dist/css/bootstrap.min.css';
import FormGroup from 'react-bootstrap/esm/FormGroup';
import FormLabel from 'react-bootstrap/esm/FormLabel';
import FormCheck from 'react-bootstrap/esm/FormCheck';

const axios = require('axios').default;
const AddMedicament = () => {
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    let [isAvailable] = useState(true)
    let [isRunningOut] = useState(false)
    let [doesExpireAfterOpen] = useState(false)
    let [doesMedicamentExists] = useState(false)
    var statusCode = 0;
    const { name,
        type,
        description,
        linkLeaflet,
        expirationDate } = form

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value
        })
        // Check and see if errors exist, and remove them from the error object:
        if (!!errors[field]) setErrors({
            ...errors,
            [field]: null
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        // get our new errors
        const newErrors = findFormErrors()
        // Conditional logic:
        if (Object.keys(newErrors).length > 0) {
            // We got errors!
            setErrors(newErrors)
        } else {
            (async() => {
                await addMedicamentAsync()
                console.log(`the status code after executing the function ${statusCode}`)
                if (statusCode !== 200 || statusCode !== 204) {
                    alert("нещо се обърка")
                } else
                    // No errors! Put any logic here for the form submission!
                    alert(`Добавихте нов медикамент в инвентара ${name}`)
            })(); 
        }
    }

    const verifyIsMedicamentAddedAsync = useCallback(
        async () => {
            axios.get(`https://main-invento-m5k5bapnre712ycg-gtw.qovery.io/medicaments/${name}`).
                then(response => {
                    console.log(response)
                    if (response.status === 200) {
                        doesMedicamentExists = true
                        console.log("if " + response.status)
                        console.log("does med exist in verify method: " + doesMedicamentExists)
                    } else console.log("else" + response.status)
                })
        }
    )


    const addMedicamentAsync = useCallback(async () => {
        axios.post('https://main-invento-m5k5bapnre712ycg-gtw.qovery.io/medicaments/add', {
            name: name,
            expirationDate: expirationDate,
            description: description,
            linkLeaflet: linkLeaflet,
            doesExpireAfterOpen: doesExpireAfterOpen,
            isRunningOut: isRunningOut,
            isAvailable: isAvailable
        }).then((response) => {
            console.log(response)
            console.log(response.status)
            statusCode = response.status
            console.log(`The status code after getting response.status e ${statusCode}// response.status e ${response.status}`)
        }).catch((error) => {
            console.log(error)
        })
    })

    var cantBeEmptyError = "Не може да е празно!"

    const findFormErrors = () => {
        const newErrors = {}
        // name errors
        verifyIsMedicamentAddedAsync()
        console.log(`does medicament exists in find errors method: ${doesMedicamentExists}`)
        if (!name || name === '') newErrors.name = cantBeEmptyError
        else if (name.length > 30) newErrors.name = 'name is too long!'
        else if (doesMedicamentExists) newErrors.name = 'Този медикамент вече е добавен в инвентара'
        // description errors
        if (!description || description === '') newErrors.description = cantBeEmptyError
        else if (description.length > 100) newErrors.description = 'description is too long!'
        // expiration date errors
        if (!expirationDate || expirationDate === '') newErrors.expirationDate = cantBeEmptyError
        // type errors
        if (!type || type === '') newErrors.type = cantBeEmptyError

        return newErrors
    }

    return (
        <div className='Form d-flex flex-column align-items-center'>
            <h1>Добави нов медикамент</h1>
            <Form style={{ width: '300px' }}>
                <Form.Group>
                    <Form.Label>Име</Form.Label>
                    <Form.Control
                        type='text'
                        onChange={e => setField('name', e.target.value)}
                        isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.name}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Линк към листовката</Form.Label>
                    <Form.Control
                        type='text'
                        onChange={e => setField('linkLeaflet', e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Описание</Form.Label>
                    <Form.Control
                        as='textarea'
                        onChange={e => setField('description', e.target.value)}
                        isInvalid={!!errors.description}
                    />
                    <Form.Control.Feedback type='invalid'>{errors.description}</Form.Control.Feedback>
                </Form.Group>
                <fieldset>
                    <Form.Group >
                        <FormLabel>Тип на Медикамента</FormLabel>
                        <Form.Check
                            type="radio"
                            label="first radio"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                            onChange={e => setField('type', e.target.name)}
                            isInvalid={!!errors.type}
                        />
                        <Form.Check
                            type="radio"
                            label="second radio"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                            onChange={e => setField('type', e.target.name)}
                            isInvalid={!!errors.type}
                        />
                        <Form.Check
                            type="radio"
                            label="third radio"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                            onChange={e => setField('type', e.target.name)}
                            isInvalid={!!errors.type}
                        />
                        <Form.Control.Feedback type='invalid'>{errors.type}</Form.Control.Feedback>
                    </Form.Group>
                </fieldset>
                <Form.Group>
                    <Form.Label>Годен до</Form.Label>
                    <Form.Control
                        type="date"
                        name="expirationDate"
                        onChange={e => setField('expirationDate', e.target.value)}
                        isInvalid={!!errors.expirationDate}
                        placeholder="Годен до" />
                    <Form.Control.Feedback type='invalid'>{errors.expirationDate}</Form.Control.Feedback>
                </Form.Group>
                <Form.Group >
                    <Form.Check
                        type="switch"
                        id="doesExpireAfterOpen"
                        label="Разваля ли се след отваряне"
                        onChange={e => doesExpireAfterOpen = e.target.checked}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Check
                        type="switch"
                        id="isRunningOut"
                        label="Свършва ли"
                        onChange={e => isRunningOut = e.target.checked}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Check
                        type="switch"
                        id="isAvailable"
                        label="Наличен"
                        onChange={e => isAvailable = e.target.checked}
                        defaultChecked
                    />
                </Form.Group>


                <Button type='submit' onClick={handleSubmit}>Добави</Button>
                <Form.Group></Form.Group>
            </Form>
        </div>
    )
}

export default AddMedicament;