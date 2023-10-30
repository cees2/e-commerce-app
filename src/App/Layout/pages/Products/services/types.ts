export interface NewProductApi {
    name: string;
    price: number;
    description: string;
    images?: FileList[] | FormData;
}
