import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { StrictMode } from "react";
import React from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
