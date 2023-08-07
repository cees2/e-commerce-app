export interface CategoryApi {
    id: number;
    name: string;
    image: string;
}

export interface ProductApi {
    // id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
    // category: CategoryApi;
}
