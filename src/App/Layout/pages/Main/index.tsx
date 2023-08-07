import { Categories } from "./pages/Categories";
import classes from "./styles/Main.module.css";

export const Main = () => {
    const { mainAppContent } = classes;

    return (
        <main className={mainAppContent}>
            <Categories />
        </main>
    );
};
