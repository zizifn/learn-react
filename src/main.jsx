import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { StrictMode } from "react";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./components/store/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
