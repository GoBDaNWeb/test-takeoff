import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IAuthState} from './types'

const initialState: IAuthState = {
    data: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
})

export const userReducer = userSlice.reducer

export const {} = userSlice.actions