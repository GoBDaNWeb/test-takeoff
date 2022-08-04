import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IContactsState} from './types'

const initialState: IContactsState = {
    data: null
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
    },
})

export const contactsReducer = contactsSlice.reducer

export const {} = contactsSlice.actions