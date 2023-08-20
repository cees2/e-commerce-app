import { Layout } from "../App/Layout";
import { categoriesRouting } from "./pages/Categories";
import { mainContentRouting } from "./pages/Main";

export const appMainRouting = [
    {
        path: "/",
        element: <Layout />,
        children: [mainContentRouting, categoriesRouting],
    },
];
