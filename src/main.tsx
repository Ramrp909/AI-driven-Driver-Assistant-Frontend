import { createRoot } from "react-dom/client";

import App from "./app/App.tsx";

import "./styles/index.css";

import { AIProvider } from "./context/AIContext";

createRoot(document.getElementById("root")!).render(
  <AIProvider>
    <App />
  </AIProvider>
);
  