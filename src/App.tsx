import { Layout } from "./App/Layout";
import { BrowserRouter } from "react-router-dom";

export function App() {
    return (
        <BrowserRouter>
            <Layout />
        </BrowserRouter>
    );
}

export default App;
