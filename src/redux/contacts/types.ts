export interface IContactsState {
    data: null,
    isOpenCreateModal: boolean,
    isOpenUpdateModal: boolean,
    isOpenDeleteModal: boolean,
    searchValue: string,
    selectContact: IContactsResponse | null,
    page: number
}

export interface IContactsResponse {
    id: number,
    fullname: string,
    username: string,
    email: string,
    phone: string,
    website: string
}

export interface IContactsQuery {
    id?: number,
    fullname: string,
    username: string,
    email: string,
    phone: string,
    website: string
}