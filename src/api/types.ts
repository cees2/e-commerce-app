import { ProductTypesApi } from "../App/Common/services/types";

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
