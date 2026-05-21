import { createRoot } from "react-dom/client";
import App from "./App";
import "./i18n"; // i18n tizimini ulash

createRoot(document.getElementById("root")).render(
    <App />
);