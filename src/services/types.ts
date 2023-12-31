import { ProductTypesApi } from "../App/Common/services/types";

export interface LogInCredentials {
    email: string;
    password: string;
}

export enum userRole {
    USER = "user",
    SELLER = "seller",
    ADMIN = "admin",
}

export interface RegisterCredentials {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
    role: userRole;
}

export interface CategoryApi {
    id: number;
    name: string;
    svg: string;
}

export interface CategoryWithoutSvgApi {
    id: number;
    name: string;
}

export interface ProductApi {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    type?: ProductTypesApi;
}

export interface UserApi {
    name: string;
    token: string;
}

export enum FlashType {
    SUCCESS = "SUCCESS",
    WARNING = "WARNING",
    ERROR = "ERROR",
}

export interface Flash {
    id: string;
    type: FlashType;
    message: string;
}

export interface InvalidFormField {
    name: string;
    message: string;
}
