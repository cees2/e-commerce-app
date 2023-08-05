import classes from "./styles/index.module.css";

export const Header = () => {
    const { headerWrapper } = classes;

    return <header className={headerWrapper}>Fake e commerce app</header>;
};
