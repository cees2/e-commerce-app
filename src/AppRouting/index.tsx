import { Layout } from "../App/Layout";
import { categoryProductsRouting } from "./pages/CategoryProducts";
import { mainContentRouting } from "./pages/Main";
import { authenticationRouting } from "./pages/Authentication";
import { productRouting } from "./pages/Products";
import { accountRouting } from "./pages/Account";

export const appMainRouting = [
    {
        path: "/",
        element: <Layout />,
        children: [
            mainContentRouting,
            categoryProductsRouting,
            authenticationRouting,
            productRouting,
            accountRouting,
        ],
    },
];
