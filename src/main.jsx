import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//import App from "./App.jsx";
import HomePage from "./pages/HomePage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
);

/*

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);


*/