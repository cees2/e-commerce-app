import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { appMainRouting } from "./AppRouting";

const router = createBrowserRouter([...appMainRouting]);

export function App() {
    return <RouterProvider router={router} />;
}

export default App;
