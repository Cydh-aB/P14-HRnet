import React from 'react'
import Form from '../components/Form'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../styles/color'

/** Styles **/
const StyleContainer = styled.main`
  form, fieldset {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  form {
    margin-top: 1rem;
  }
  fieldset {
    padding: 1rem;
    border: 1px solid $secondary;
    border-radius: 8px;
  }
  section {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  label, input {
    padding: 0.5rem;
    margin-left: 0;
  }
  label {
    padding-left: 0;
    width: 135px;
  }
  input {
    border-radius: 4px;
    border: 1px solid $secondary;
    color: inherit;
    &:focus-visible {
      border: 1px solid $primary;
      outline: none;
    }
  }
  button {
    align-self: center;
    border: none;
    border-radius: 4px;
    padding: .4rem 1rem;
    background-color: $secondary;
    cursor: pointer;
  }
`

const StyleH2 = styled.h2`
  color: ${colors.green};
  margin-bottom: 5rem;
  margin-top: 3rem;
`

const CreateEmployee = () => {
  return (
    <main>
        <StyleH2>Create Employee</StyleH2>
      <Form />
    </main>
  )
}

export default CreateEmployee