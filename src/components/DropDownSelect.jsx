import React from 'react'
import Select from 'react-select'
import styled from 'styled-components'

/** Style **/
const StyleContainer = styled.div`
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
`

const DropDownSelect = ({ options, selected, setInput }) => {
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      "&:hover" : {
        backgroundColor: !state.isSelected && 'rgba(90, 111, 7, .2)',
      },
      backgroundColor: state.isSelected && 'rgb(90,111,7)',
      color: state.isSelected ? 'white' : 'rgb(90, 111, 7)',
      cursor: 'pointer'
    }),
    control: (provided, state) => {
      console.log(state)
      return({
        ...provided,
        "&hover" : {
          outline: state.isFocused ? '2px solid rgb(147, 173, 24)' : '1px solid rgb(90, 111, 7)',
        },
        boder: 0,
        outline: state.isFocused ? '2px solid rgb(147, 173, 24)' : '1px solid rgb(90, 111, 7)',
        boxShadow: 'none',
        minHeight: '33px',
      })
    },
    valueContainer: (provided, state) => ({
      ...provided,
      fontSize: "13.33px"
    }),
    dropDownIndicator: (provided, state) => ({
      ...provided,
      padding: "4px 8px"
    }),
  }
  function handleChange(e) {
    setInput(e.value)
  }

  return (
    <StyleContainer>
      <Select
          options={options}
          defaultValue={selected}
          styles={customStyles}
          onChange={(e) => handleChange(e)}
      />
    </StyleContainer>
  )
}

export default DropDownSelect