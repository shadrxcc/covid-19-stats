import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from "./reportWebVitals";
import Routeswitch from "./RouteSwitch";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routeswitch />
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
