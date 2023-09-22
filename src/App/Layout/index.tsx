import { Header } from "./pages/Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store";

export const Layout = () => {
    return (
        <Provider store={store}>
            <Header />
            <Outlet />
        </Provider>
    );
};
