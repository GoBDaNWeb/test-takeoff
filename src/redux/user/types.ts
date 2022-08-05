export interface IUser {
    id: number,
    login: string,
    password: string,
}

export interface IAuthState {
    data: IUser | null
}