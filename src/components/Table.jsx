import React from 'react'
import { useReducer } from 'react'
import { useState } from 'react'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { removeEmployee } from '../redux/feature/employeeSlice'

import styled from 'styled-components'
import colors from '../styles/color'

const defaultData = [
    {
        fistName: 'Tanner',
        lastName: 'linsley',
        birthDate: '24/01/1970',
        startDate: '02/07/2018',
        street: '1 avenue du 1er janvier',
        city: 'Scranton',
        state: 'Pennsylvania',
        zipCode: '00001',
        department: 'Sales',
    },
    {
        fistName: 'Billy',
        lastName: 'Bob',
        birthDate: '14/08/1981',
        startDate: '13/12/2018',
        street: '227 avenue Brandon',
        city: 'Albuquerque',
        state: 'New Mexico',
        zipCode: '00002',
        department: 'Engineering',
    },
    {
        firstName: 'Michel',
        lastName: 'michel',
        birthDate: '31/04/1976',
        startDate: '04/07/2019',
        street: '3 avenue Leclerc',
        city: 'Brando',
        state: 'Alabama',
        zipCode: '00003',
        department: 'Marketing',
    }
]

const columns = [
    {
        accessorKey: 'firstName',
        header: 'First Name',
    },
    {
        accessorKey: 'lastName',
        header: 'Last Name',
    },
    {
        accessorKey: 'birthDate',
        header: 'Date of Birth'
    },
    {
        accessorKey: 'startDate',
        header: 'Start Date'
    },
    {
        accessorKey: 'street',
        header: 'Street',
    },
    {
        accessorKey: 'city',
        header: 'City',
    },
    {
        accessorKey:'selectedState',
        header: 'State',
    },
    {
        accessorKey: 'zipCode',
        header: 'Zip Code',
    },
    {
        accessorKey: 'selectedDepartment',
        header: 'Department',
    }
]

const Table = () => {

    const employees = useSelector(state => state?.employee.employeesList)
    const dispatch = useDispatch()
    const [data, setData] = useState([...employees])
    const rerender = useReducer(() => ({}, {}))[1]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    function handleDelete(id) {
        dispatch(removeEmployee(employees[id]))
    }

    useEffect(() => {
        setData([...employees])
    }, [employees])

    return !employees.length ? (
        <div>
            <p>There is no employee to display</p>
            <StyleLink to='/'>Back Home</StyleLink>
        </div>
    ) : (
        <StyleContainer>
            <StyleTable>
                <thead>
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {header.isPlaceholder ? null : flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </td>
                            ))}
                            <td onClick={() => handleDelete(row.id)}>
                                <span>X</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </StyleTable>
        </StyleContainer>
    )
}

export default Table

/** Style **/

const StyleContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    overflow: auto hidden;
    margin-bottom: 5rem;
`

const StyleTable = styled.table`
    margin-top: 1rem;
    border-collapse: collapse;
    width: 100%;
    overflow: auto hidden;

    th, td {
        border: 1px solid ${colors.green};
        padding: 0 .2rem;
        height: 40px;
        color: ${colors.green};
    }

    span {
        font-size: 25px;
        font-weight: 800;
        margin: 0;
        cursor: pointer;
    }
`

const StyleLink = styled(Link)`
    color: ${colors.green};

    &:hover{
        color: ${colors.green};
        border-bottom: 2px solid ${colors.green};
    }
`