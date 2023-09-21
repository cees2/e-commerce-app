import { Bestsellers } from "./pages/Bestsellers";
import { CategoriesDropdown } from "./components/CategoriesDropdown";
import { TimeLimitedDeals } from "./pages/TimeLimitedDeals";
import classes from "./styles/Main.module.css";
import {
    getCategories,
    getTimeLimitedDeals,
    getBestsellers,
} from "../../../../api/Old/requests";
import { useLoaderData } from "react-router-dom";
import { CategoryApi, ProductApi } from "../../../../services/types";

type MainData = [CategoryApi[], ProductApi[], ProductApi[]];

export const Home = () => {
    const { mainAppContent } = classes;
    const [categories, timeLimitedDeals, bestsellers] =
        useLoaderData() as MainData;

    return (
        <main className={mainAppContent}>
            <CategoriesDropdown categories={categories} />
            <TimeLimitedDeals products={timeLimitedDeals} />
            <Bestsellers products={bestsellers} />
        </main>
    );
};

export const getHomeData = async () => {
    const [categories, timeLimitedDeals, bestsellers] = await Promise.all([
        getCategories(),
        getTimeLimitedDeals(),
        getBestsellers(),
    ]);

    return [categories, timeLimitedDeals, bestsellers];
};
