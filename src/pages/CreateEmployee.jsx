import React from 'react'
import Form from '../components/Form'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../styles/color'


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