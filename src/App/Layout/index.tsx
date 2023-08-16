import { Route, Routes } from "react-router-dom";
import { Header } from "./pages/Header";
import { Main } from "./pages/Main";
import { CategoriesIndexPage } from "./pages/Main/pages/Category";
import { CategoryProductsList } from "./pages/Main/pages/Category/pages/index";

export const Layout = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/categories" element={<CategoriesIndexPage />}>
                    <Route
                        path={`:categoryId`}
                        element={<CategoryProductsList />}
                    />
                </Route>
                <Route path="/" element={<Main />} />
            </Routes>
        </>
    );
};
