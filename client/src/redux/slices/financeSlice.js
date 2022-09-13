import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    stocks:[]
}

export const financeSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        changeStocks : (state,action) => {
            state.stocks = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { changeStocks } = financeSlice.actions

export default financeSlice.reducer