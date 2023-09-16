import { logInRouting } from "./pages/LogIn";
import { registerRouting } from "./pages/Register";

export const authenticationRouting = {
    path: "/auth",
    children: [logInRouting, registerRouting],
};
