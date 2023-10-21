import { Header } from "./pages/Header";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store";
import { AppFlash } from "../Common/Flash";
import { Sidebar } from "./pages/Sidebar";
import { useState } from "react";

export const Layout = () => {
    const [sidebarActive, setSidebarActive] = useState(false);

    return (
        <AppFlash>
            <Provider store={store}>
                <Header setSidebarActive={setSidebarActive} />
                <Sidebar sidebarActive={sidebarActive} />
                <Outlet />
            </Provider>
        </AppFlash>
    );
};
