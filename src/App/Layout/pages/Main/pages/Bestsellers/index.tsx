import { ListOfProducts } from "../../../../../Common/ListOfProducts";

const products = [
    {
        id: 2,
        title: "Small Bronze Computer",
        price: 134,
        description:
            "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        images: [
            "https://picsum.photos/640/640?r=5200",
            "https://picsum.photos/640/640?r=2531",
            "https://picsum.photos/640/640?r=9544",
        ],
        creationAt: "2023-08-08T15:13:34.000Z",
        updatedAt: "2023-08-08T15:13:34.000Z",
        category: {
            id: 3,
            name: "Furniture",
            image: "https://picsum.photos/640/640?r=7896",
            creationAt: "2023-08-08T15:13:34.000Z",
            updatedAt: "2023-08-08T15:13:34.000Z",
        },
    },
    {
        id: 3,
        title: "Modern Concrete Gloves",
        price: 817,
        description:
            "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        images: [
            "https://picsum.photos/640/640?r=8074",
            "https://picsum.photos/640/640?r=7270",
            "https://picsum.photos/640/640?r=9746",
        ],
        creationAt: "2023-08-08T15:13:34.000Z",
        updatedAt: "2023-08-08T15:13:34.000Z",
        category: {
            id: 5,
            name: "Others",
            image: "https://picsum.photos/640/640?r=1562",
            creationAt: "2023-08-08T15:13:34.000Z",
            updatedAt: "2023-08-08T15:13:34.000Z",
        },
    },
    {
        id: 4,
        title: "Handcrafted Soft Ball",
        price: 328,
        description:
            "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        images: [
            "https://picsum.photos/640/640?r=4133",
            "https://picsum.photos/640/640?r=4052",
            "https://picsum.photos/640/640?r=7911",
        ],
        creationAt: "2023-08-08T15:13:34.000Z",
        updatedAt: "2023-08-08T15:13:34.000Z",
        category: {
            id: 4,
            name: "Shoes",
            image: "https://picsum.photos/640/640?r=4216",
            creationAt: "2023-08-08T15:13:34.000Z",
            updatedAt: "2023-08-08T15:13:34.000Z",
        },
    },
    {
        id: 5,
        title: "Sleek Rubber Car",
        price: 39,
        description:
            "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        images: [
            "https://picsum.photos/640/640?r=6039",
            "https://picsum.photos/640/640?r=4676",
            "https://picsum.photos/640/640?r=3005",
        ],
        creationAt: "2023-08-08T15:13:34.000Z",
        updatedAt: "2023-08-08T15:13:34.000Z",
        category: {
            id: 4,
            name: "Shoes",
            image: "https://picsum.photos/640/640?r=4216",
            creationAt: "2023-08-08T15:13:34.000Z",
            updatedAt: "2023-08-08T15:13:34.000Z",
        },
    },
];

export const Bestsellers = () => {
    return <ListOfProducts products={products} />;
};
