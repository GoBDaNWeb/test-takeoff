import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IContactsState, IContactsResponse} from './types'

const initialState: IContactsState = {
    data: null,
    isOpenCreateModal: false,
    isOpenUpdateModal: false,
    isOpenDeleteModal: false,
    searchValue: '',
    selectContact: null,
    page: 1
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        handleOpenCreateModal: (state: IContactsState) => {
            state.isOpenCreateModal = !state.isOpenCreateModal
        },
        handleOpenUpdateModal: (state: IContactsState) => {
            state.isOpenUpdateModal = !state.isOpenUpdateModal
        },
        handleOpenDeleteModal: (state: IContactsState) => {
            state.isOpenDeleteModal = !state.isOpenDeleteModal
        },
        setSearchValue: (state: IContactsState, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        },
        setSelectContact: (state: IContactsState, action: PayloadAction<IContactsResponse>) => {
            state.selectContact = action.payload
        },
        incPage: (state: IContactsState) => {
            state.page = state.page + 1
        },
        decPage: (state: IContactsState) => {
            state.page = state.page - 1
        },
    },
})

export const contactsReducer = contactsSlice.reducer

export const {
    handleOpenCreateModal, 
    handleOpenUpdateModal, 
    handleOpenDeleteModal,
    setSearchValue,
    setSelectContact, 
    incPage, 
    decPage
} = contactsSlice.actions