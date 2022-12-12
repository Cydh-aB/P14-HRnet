import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { persistReducer, REGISTER } from "redux-persist"
import storage from "redux-persist/lib/storage"

import employeeReducer from './feature/employeeSlice'

const reducers = combineReducers({
    employee: employeeReducer
})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [REGISTER]
        }
    })
})

export default store