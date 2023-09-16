import { Layout } from "../App/Layout";
import { productsRouting } from "./pages/CategoryProducts";
import { mainContentRouting } from "./pages/Main";
import { authenticationRouting } from "./pages/Authentication";

export const appMainRouting = [
    {
        path: "/",
        element: <Layout />,
        children: [mainContentRouting, productsRouting, authenticationRouting],
    },
];
