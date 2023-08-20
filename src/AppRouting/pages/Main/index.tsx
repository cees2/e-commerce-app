import { Home } from "../../../App/Layout/pages/Home";
import { getHomeData } from "../../../App/Layout/pages/Home";

export const mainContentRouting = {
    path: "",
    element: <Home />,
    loader: getHomeData,
};
