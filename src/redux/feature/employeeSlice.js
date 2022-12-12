import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
    name: "employee",
    initialState: {
        employeesList: []
    },
    reducers: {
        addInList: (state, {payload}) => {
            state.employeesList.push(payload)
        },
        removeEmployee: (state, {payload}) => {
            state.employeesList = state.employeesList.filter((employee) => employee.id !== payload.id)
        }
    }
})

export const { addInList, removeEmployee }= employeeSlice.actions
export default employeeSlice.reducer