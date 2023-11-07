import { changePasswordRouting } from "./pages/changePassword";

export const accountRouting = {
    path: "/account",
    children: [changePasswordRouting],
};
