import { ProductTypesApi } from "../App/Common/services/types";

export interface LogInCredentials {
    email: string;
    password: string;
}

export interface RegisterCredentials {
    name: string;
    email: string;
    password: string;
    passwordConfirm: string;
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
