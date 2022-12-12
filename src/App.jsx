import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './layouts/Header'
import CreateEmployee from "./pages/CreateEmployee"
import EmployeesList from "./pages/EmployeesList"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<CreateEmployee />} />
          <Route path='/employees' element={<EmployeesList />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
