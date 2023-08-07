import { Carousel } from "react-bootstrap";
// import { Product } from "../../../../../Common/Product";
// import classes from "../../styles/Bestsellers.module.css";

const mock = [
    {
        id: 1,
        title: "Tasty Frozen Mouse",
        price: 318,
        description:
            "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        images: [
            "https://picsum.photos/640/640?r=1348",
            "https://picsum.photos/640/640?r=5605",
            "https://picsum.photos/640/640?r=2084",
        ],
        creationAt: "2023-08-07T14:23:34.000Z",
        updatedAt: "2023-08-07T14:23:34.000Z",
        category: {
            id: 2,
            name: "Electronics",
            image: "https://picsum.photos/640/640?r=2334",
            creationAt: "2023-08-07T14:23:34.000Z",
            updatedAt: "2023-08-07T14:23:34.000Z",
        },
    },
    {
        id: 2,
        title: "Generic Bronze Soap",
        price: 205,
        description:
            "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        images: [
            "https://picsum.photos/640/640?r=9535",
            "https://picsum.photos/640/640?r=4103",
            "https://picsum.photos/640/640?r=2829",
        ],
        creationAt: "2023-08-07T14:23:34.000Z",
        updatedAt: "2023-08-07T14:23:34.000Z",
        category: {
            id: 3,
            name: "Furniture",
            image: "https://picsum.photos/640/640?r=1972",
            creationAt: "2023-08-07T14:23:34.000Z",
            updatedAt: "2023-08-07T14:23:34.000Z",
        },
    },
    {
        id: 1,
        title: "Tasty Frozen Mouse",
        price: 318,
        description:
            "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        images: [
            "https://picsum.photos/640/640?r=1348",
            "https://picsum.photos/640/640?r=5605",
            "https://picsum.photos/640/640?r=2084",
        ],
        creationAt: "2023-08-07T14:23:34.000Z",
        updatedAt: "2023-08-07T14:23:34.000Z",
        category: {
            id: 2,
            name: "Electronics",
            image: "https://picsum.photos/640/640?r=2334",
            creationAt: "2023-08-07T14:23:34.000Z",
            updatedAt: "2023-08-07T14:23:34.000Z",
        },
    },
    {
        id: 2,
        title: "Generic Bronze Soap",
        price: 205,
        description:
            "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        images: [
            "https://picsum.photos/640/640?r=9535",
            "https://picsum.photos/640/640?r=4103",
            "https://picsum.photos/640/640?r=2829",
        ],
        creationAt: "2023-08-07T14:23:34.000Z",
        updatedAt: "2023-08-07T14:23:34.000Z",
        category: {
            id: 3,
            name: "Furniture",
            image: "https://picsum.photos/640/640?r=1972",
            creationAt: "2023-08-07T14:23:34.000Z",
            updatedAt: "2023-08-07T14:23:34.000Z",
        },
    },
];

export const Bestsellers = () => {
    // const { productBestsellersContainer } = classes;

    return (
        <>
            {/* <h2>Bestsellers</h2>
            <div className={productBestsellersContainer}>
                {mock.map((m) => (
                    // <Product
                    //     key={m.id}
                    //     price={m.price}
                    //     description={m.description}
                    //     images={m.images}
                    //     title={m.title}
                    // />
                    <div></div>
                ))}
            </div> */}

            <Carousel>
                {mock.map((m) => (
                    <Carousel.Item key={m.id}>
                        <img src={m.images[0]} alt={m.title} />
                        <Carousel.Caption>
                            <h3>{m.title}</h3>
                            <p>{m.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    );
};
