import {RootState} from '../store'

export const selectIsOpenCreateModal = (state: RootState) => state.contacts.isOpenCreateModal
export const selectIsOpenUpdateModal = (state: RootState) => state.contacts.isOpenUpdateModal
export const selectIsOpenDeleteModal = (state: RootState) => state.contacts.isOpenDeleteModal
export const selectPage = (state: RootState) => state.contacts.page
export const selectContact = (state: RootState) => state.contacts.selectContact
export const selectSearchValue = (state: RootState) => state.contacts.searchValue