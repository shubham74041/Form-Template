import { configureStore } from '@reduxjs/toolkit'
import formData from './slices/formData'
import dropData from './slices/dropData'

export const store = configureStore({
    reducer: {
        formData,
        dropData
    },
})