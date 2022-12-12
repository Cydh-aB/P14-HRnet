import React from 'react'
import { useState } from 'react'
import { departmentsList } from '../datas/DepartmentList'
import { statesList } from '../datas/StateList'
import Calendar from './DatePicker'
import DropDownSelect from './DropDownSelect'
import styled from 'styled-components'
import { addInList } from '../redux/feature/employeeSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Modal } from 'component-modal'

/** Styles **/

import colors from "../styles/color"

const StyleForm = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 2.5rem;
`

const StyleBTN = styled.button`
    padding: 1rem;
    font-size: 2rem;
    font-weight: bold;
    border-color: ${colors.green};
    cursor: pointer;
    border-radius: 1rem;
    background-color: ${colors.green};
    color: ${colors.lightGreen};
`

const StyleContainer = styled.section`
    display: flex;
    flex-direction: column;

    label {
        position: absolute;
        color: ${colors.green};
        font-size: 1.3rem;
        margin-top: -1.6rem;
        font-weight: 700;
    }

    input {
        font-size: 1.5rem;
        padding: .2rem 0;
        margin-bottom: 1rem;
        border: none;
        background-color: ${colors.lightGreen};
        border-bottom: solid .2rem ${colors.green};
        color: ${colors.green};
        font-weight: 500;

        ::placeholder {
            color: ${colors.green};
            font-weight: 300;
        }

        :focus {
            outline: none;
            border-bottom: solid .2rem ${colors.green};

            ::placeholder {
                color: transparent;
            }
        }
    }

    .birth, .start {
        margin-top: .3rem;
    }

    .department{
        margin-top: -0.5rem;
    }
`

const StyleFieldSet = styled.fieldset`
    input {
        margin-top: 1.5rem;
    }

    label {
        margin-top: -0.3rem;
    }

    legend{
        color: ${colors.green};
        margin-bottom: 1.3rem;
        font-size: 1.3rem;
    }
`

const Form = () => {

    const date = new Date()
    const dispatch = useDispatch()

    const [firstName, setFirstname] = useState('')
    const [lastName, setLastName] = useState('')
    const [birthDate, setBirthDate] = useState(date.toLocaleDateString("fr-FR"))
    const [startDate, setStartDate] = useState(date.toLocaleDateString("fr-FR"))
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [selectedState, setSelectedState] = useState(statesList[0].value)
    const [zipCode, setZipCode] = useState('')
    const [selectedDepartment, setSelectedDepartment] = useState(departmentsList[0].value)
    const [isSubmitted, setIsSubmitted] = useState(false)

    let id = 1
    const employees = useSelector(state => state?.employee.employeesList)
    if (employees.length) {
        id = Math.max(...employees.map(employee => employee.id))+1
    }

    const newEmployee = {
        id,
        firstName,
        lastName : lastName.toUpperCase(),
        birthDate,
        startDate,
        street,
        city,
        selectedState,
        zipCode,
        selectedDepartment
    }

    function inputsReset(){
        setFirstname('')
        setLastName('')
        setBirthDate(date.toLocaleDateString("fr-FR"))
        setStartDate(date.toLocaleDateString("fr-FR"))
        setStreet('')
        setCity('')
        setSelectedState(statesList[0])
        setZipCode('')
        setSelectedDepartment(departmentsList[0])
    }

    function submitForm(e) {
        e.preventDefault()
        dispatch(addInList(newEmployee))
        setIsSubmitted(true)
        inputsReset()
    }

  return (
    <>
    <StyleForm onSubmit={submitForm}>
        <StyleContainer>
            <label htmlFor='firstname'>FirstName</label>
            <input type="text" name='firstname' id='firstname' onChange={(e) => setFirstname(e.target.value)} value={firstName} required/>
        </StyleContainer>

        <StyleContainer>
            <label htmlFor='lastname'>LastName</label>
            <input type="text" name='lastname' id='lastname' onChange={(e) => setLastName(e.target.value)} required/>
        </StyleContainer>
        
        <StyleContainer>
            <label className='birth' htmlFor='birth'>Birth Date</label>
            <Calendar setInputDate={setBirthDate}/>
        </StyleContainer>

        <StyleContainer>
            <label className='start' htmlFor='start'>Start Date</label>
            <Calendar setInputDate={setStartDate}/>
        </StyleContainer>

        <StyleFieldSet>
            <legend>Adress</legend>
            <StyleContainer>
                <label htmlFor='street adress_label'>Street</label>
                <input type="text" name='street' id='street' onChange={(e) => setStreet(e.target.value)} required/>
            </StyleContainer>
            <StyleContainer>
                <label htmlFor='city adress_label'>City</label>
                <input type="text" name='city' id='city' onChange={(e) => setCity(e.target.value)} required/>
            </StyleContainer>
            <StyleContainer>
                <label htmlFor='state adress_label'>State</label>
                <DropDownSelect options={statesList} selected={statesList[0]} setInput={setSelectedState}/>
            </StyleContainer>
            <StyleContainer>
                <label htmlFor='zip-code adress_label'>Zip-code</label>
                <input type="number" name='zip-code' id='zip-code' onChange={(e) => setZipCode(e.target.value)} required/>
            </StyleContainer>
        </StyleFieldSet>

        <StyleContainer>
            <label className='department' htmlFor='department'>Department</label>
            <DropDownSelect styles options={departmentsList} selected={departmentsList[0]} setInput={setSelectedDepartment}/>
        </StyleContainer>

        <StyleBTN type='submit'>Save</StyleBTN>
    </StyleForm>
    <Modal
        title='Congratulation !'
        content='Employee have been created.'
        open={isSubmitted}
        hideModal={() => setIsSubmitted(false)}
    />
    </>
  )
}

export default Form