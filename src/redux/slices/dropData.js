import { createSlice } from '@reduxjs/toolkit'

export const dropData = createSlice({
    name: 'dropData',
    initialState: {
        dropData: [],
    },
    reducers: {
        setDropData: (state, action) => {
            state.dropData.push(action.payload)
        },
    },
})

export const { setDropData } = dropData.actions;

export default dropData.reducer