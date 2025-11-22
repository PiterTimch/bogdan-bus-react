export interface IRegisterUser {
    name: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    image?: File | null;
}
