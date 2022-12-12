import React from 'react'
import styled from 'styled-components'
import Table from '../components/Table'
import colors from '../styles/color'

const StyleH2 = styled.h2`
  color: ${colors.green};
`

const EmployeesList = () => {
  return (
    <main>
        <StyleH2>Current Employees</StyleH2>
        <Table />
    </main>
  )
}

export default EmployeesList