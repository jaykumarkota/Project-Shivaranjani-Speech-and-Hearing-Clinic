import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/modern-normalize.css";
import "./styles/index.css";
import "./styles/utils.css";
import App from "./App.jsx";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
);
