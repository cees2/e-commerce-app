import { Bestsellers } from "./pages/Bestsellers";
import { Categories } from "./pages/Categories";
import { TimeLimitedDeals } from "./pages/TimeLimitedDeals";
import classes from "./styles/Main.module.css";

export const Main = () => {
    const { mainAppContent } = classes;

    return (
        <main className={mainAppContent}>
            <Categories />
            <TimeLimitedDeals />
            <Bestsellers />
        </main>
    );
};
