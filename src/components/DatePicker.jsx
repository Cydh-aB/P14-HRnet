import React from 'react'
import { useState } from 'react'
import DatePicker from "react-datepicker"
import 'react-datepicker/dist/react-datepicker.css';


const Calendar = ({ setInputDate }) => {

  const [displayDate, setDisplayDate] = useState(new Date())

  function handleChange(e) {
    setDisplayDate(e)
    setInputDate(e?.toLocaleDateString("fr-FR"))
  }

  return (
    <DatePicker
        selected={displayDate}
        onChange={(e) => handleChange(e)}
        dateFormat= "dd/MM/yyyy"
        closeOnScroll={true}
        showWeekNumbers
        ariaLabelledBy='Date picker'
    />
  )
}

export default Calendar