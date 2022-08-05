import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IAuthState, IUser} from './types'

const initialState: IAuthState = {
    data: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state: IAuthState, action: PayloadAction<IUser>) => {
            window.localStorage.setItem('user', action.payload.login)
            state.data = action.payload
        },
        logout: (state: IAuthState) => {
            window.localStorage.removeItem('user')
            state.data = null
        }
    },
})

export const userReducer = userSlice.reducer

export const {login, logout} = userSlice.actions