import { ListOfProducts } from "../../../../../Common/ListOfProducts";
import { ProductTypesApi } from "../../../../../Common/services/types";

const mock = [
    {
        id: 1,
        title: "Slim Fit Crew Neck Printed T-Shirt",
        price: 220,
        description:
            "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        images: ["https://dfcdn.defacto.com.tr/7/Z3084AZ_23SP_ER105_01_02.jpg"],
        creationAt: "2023-08-12T17:05:26.000Z",
        updatedAt: "2023-08-12T19:51:49.000Z",
        category: {
            id: 2,
            name: "sex",
            image: "https://picsum.photos/640/640?r=1455",
            creationAt: "2023-08-12T17:05:26.000Z",
            updatedAt: "2023-08-13T06:25:11.000Z",
        },
    },
    {
        id: 11,
        title: "Regular Fit Viscose Printed Short Sleeve Shirt",
        price: 463,
        description:
            "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        images: ["https://dfcdn.defacto.com.tr/7/Y2903AZ_23SM_BE509_02_04.jpg"],
        creationAt: "2023-08-12T17:05:26.000Z",
        updatedAt: "2023-08-12T19:51:49.000Z",
        category: {
            id: 4,
            name: "Shoes",
            image: "https://picsum.photos/640/640?r=9326",
            creationAt: "2023-08-12T17:05:26.000Z",
            updatedAt: "2023-08-12T17:05:26.000Z",
        },
    },
    {
        id: 13,
        title: "Regular Fit Long Sleeve Linen Look Shirt",
        price: 9,
        description:
            "Boston's most advanced compression wear technology increases muscle oxygenation, stabilizes active muscles",
        images: ["https://dfcdn.defacto.com.tr/7/V2522AZ_23SP_RD44_01_03.jpg"],
        creationAt: "2023-08-12T17:05:26.000Z",
        updatedAt: "2023-08-12T19:51:49.000Z",
        category: {
            id: 4,
            name: "Shoes",
            image: "https://picsum.photos/640/640?r=9326",
            creationAt: "2023-08-12T17:05:26.000Z",
            updatedAt: "2023-08-12T17:05:26.000Z",
        },
    },
    {
        id: 14,
        title: "Oversize Fit Shirt Collar Gabardine Long Sleeve Shirt",
        price: 955,
        description:
            "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
        images: ["https://dfcdn.defacto.com.tr/7/Y7519AZ_23SP_BN326_03_03.jpg"],
        creationAt: "2023-08-12T17:05:26.000Z",
        updatedAt: "2023-08-12T19:51:49.000Z",
        category: {
            id: 2,
            name: "sex",
            image: "https://picsum.photos/640/640?r=1455",
            creationAt: "2023-08-12T17:05:26.000Z",
            updatedAt: "2023-08-13T06:25:11.000Z",
        },
    },
    {
        id: 16,
        title: "Regular Fit Shirt Collar Linen Blend Short Sleeve Shirt",
        price: 505,
        description:
            "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        images: ["https://dfcdn.defacto.com.tr/7/A5548AX_23SM_BG701_02_01.jpg"],
        creationAt: "2023-08-12T17:05:26.000Z",
        updatedAt: "2023-08-12T19:51:49.000Z",
        category: {
            id: 3,
            name: "Furniture",
            image: "https://picsum.photos/640/640?r=2657",
            creationAt: "2023-08-12T17:05:26.000Z",
            updatedAt: "2023-08-12T17:05:26.000Z",
        },
    },
    {
        id: 17,
        title: "Regular Fit Flap Collar Short Sleeve Shirt",
        price: 464,
        description:
            "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        images: ["https://dfcdn.defacto.com.tr/7/A6859AX_23SM_ER99_01_03.jpg"],
        creationAt: "2023-08-12T17:05:26.000Z",
        updatedAt: "2023-08-12T19:51:49.000Z",
        category: {
            id: 4,
            name: "Shoes",
            image: "https://picsum.photos/640/640?r=9326",
            creationAt: "2023-08-12T17:05:26.000Z",
            updatedAt: "2023-08-12T17:05:26.000Z",
        },
    },
    {
        id: 18,
        title: "Cool Regular Fit Pajama Collar Printed Short Sleeve Shirt",
        price: 867,
        description:
            "The Football Is Good For Training And Recreational Purposes",
        images: ["https://dfcdn.defacto.com.tr/7/Z2919AZ_23SM_WT46_01_02.jpg"],
        creationAt: "2023-08-12T17:05:26.000Z",
        updatedAt: "2023-08-12T19:51:49.000Z",
        category: {
            id: 4,
            name: "Shoes",
            image: "https://picsum.photos/640/640?r=9326",
            creationAt: "2023-08-12T17:05:26.000Z",
            updatedAt: "2023-08-12T17:05:26.000Z",
        },
    },
    {
        id: 19,
        title: "Regular Fit V-Neck Patterned Short Sleeve Crop Shirt",
        price: 835,
        description:
            "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        images: ["https://dfcdn.defacto.com.tr/7/A6860AX_23SM_OG78_01_02.jpg"],
        creationAt: "2023-08-12T17:05:26.000Z",
        updatedAt: "2023-08-12T19:51:49.000Z",
        category: {
            id: 2,
            name: "sex",
            image: "https://picsum.photos/640/640?r=1455",
            creationAt: "2023-08-12T17:05:26.000Z",
            updatedAt: "2023-08-13T06:25:11.000Z",
        },
    },
    {
        id: 20,
        title: "Women Long Sleeve Shirts",
        price: 163,
        description:
            "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
        images: ["https://dfcdn.defacto.com.tr/7/I8266AZ_23SP_BN348_01_03.jpg"],
        creationAt: "2023-08-12T17:05:26.000Z",
        updatedAt: "2023-08-12T19:51:49.000Z",
        category: {
            id: 3,
            name: "Furniture",
            image: "https://picsum.photos/640/640?r=2657",
            creationAt: "2023-08-12T17:05:26.000Z",
            updatedAt: "2023-08-12T17:05:26.000Z",
        },
    },
];

export const TimeLimitedDeals = () => {
    return (
        <ListOfProducts
            products={mock}
            type={ProductTypesApi.TIME_LIMITED}
            listHeaderName="Time limited deals"
        />
    );
};
