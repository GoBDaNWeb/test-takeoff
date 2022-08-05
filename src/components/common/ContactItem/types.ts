export interface IContact {
    id: number,
    fullname: string,
    username: string,
    email: string,
    phone: string,
    website: string
}

export interface IContactItemProps {
    contact: IContact
}