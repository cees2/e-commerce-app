// import { Route, Routes } from "react-router-dom";
// import { CategoryProductsList } from "./pages/index";
import { Outlet } from "react-router-dom";

export const CategoriesIndexPage = () => {
    return (
        <>
            <div>category main</div>
            <Outlet />
        </>
    );
};
