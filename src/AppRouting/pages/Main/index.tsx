import { Main } from "../../../App/Layout/pages/Main";
import { getHomeData } from "../../../App/Layout/pages/Main";

export const mainContentRouting = {
    path: "",
    element: <Main />,
    loader: getHomeData,
};
