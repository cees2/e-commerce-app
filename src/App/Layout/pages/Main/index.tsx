import { Bestsellers } from "./pages/Bestsellers";
import { CategoriesDropdown } from "./components/CategoriesDropdown";
import { TimeLimitedDeals } from "./pages/TimeLimitedDeals";
import classes from "./styles/Main.module.css";

export const Main = () => {
    const { mainAppContent } = classes;

    return (
        <main className={mainAppContent}>
            <CategoriesDropdown />
            <TimeLimitedDeals />
            <Bestsellers />
        </main>
    );
};
