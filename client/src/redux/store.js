import { configureStore } from '@reduxjs/toolkit'
import financeSlice from './slices/financeSlice.js'

export const store = configureStore({
    reducer: {
        financeSlice,
    },
})