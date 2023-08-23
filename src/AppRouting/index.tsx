import { Layout } from "../App/Layout";
import { productsRouting } from "./pages/CategoryProducts";
import { mainContentRouting } from "./pages/Main";

export const appMainRouting = [
    {
        path: "/",
        element: <Layout />,
        children: [mainContentRouting, productsRouting],
    },
];
