import { createSlice } from '@reduxjs/toolkit'

export const formData = createSlice({
    name: 'formData',
    initialState: {
        formData: [],
    },
    reducers: {
        setFormData: (state, action) => {
            state.formData.push(action.payload)
        },
    },
})
 


export const { setFormData } = formData.actions

export default formData.reducer