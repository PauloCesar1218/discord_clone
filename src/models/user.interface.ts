export interface IAuthUser {
    id: string;
    name: string;
    email: string;
    token: string;
}

export interface IUser {
    name: string;
    email: string;
    password: string;
}

export interface IUserLogin {
    email: string;
    password: string;
}