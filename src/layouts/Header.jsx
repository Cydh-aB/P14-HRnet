import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

/**
 * Styles
 */

import colors from "../styles/color"

const StyleHeader = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 1.5rem;
    margin-left: 7rem;
    margin-right: 7rem;

    img{
        height: 10rem;
        width: 10rem;
    }

    h1{
        font-size: 5rem;
        color: ${colors.green};
        font-weight: 700;
        margin-top: 0;
        margin-bottom: 0;
        text-shadow: 5px 5px 0px ${colors.lightGreen};
    }

    nav {
        display: flex;
        align-items: center;
        column-gap: 3rem;
    }

    p{
        font-size: 1.5rem;
        color: ${colors.green};
    }
`
const StyleNavLink = styled(Link)`
    font-size: 1.5rem;
    text-decoration: none;
    color: ${colors.green};
    &:hover {
        color: ${colors.green};
        border-bottom: 2px solid ${colors.green};
    }
`

export default function Header() {
    return (
        <StyleHeader>
            <h1>HRnet</h1>
            <nav>
                <StyleNavLink to="/">Create Employee</StyleNavLink>
                <p> | </p>
                <StyleNavLink to="/employees">Current Employees</StyleNavLink>
            </nav>
        </StyleHeader>
    )
}