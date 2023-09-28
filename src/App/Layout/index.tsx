import { Header } from "./pages/Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store";
import { AppFlash } from "../Common/Flash";

export const Layout = () => {
    return (
        <AppFlash>
            <Provider store={store}>
                <Header />
                <Outlet />
            </Provider>
        </AppFlash>
    );
};
