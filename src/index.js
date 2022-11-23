import React from "react";
import ReactDOM from "react-dom/client";
//mport App from "./components/App";
import "./index.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import store from "./redux/store/store";
import Routeswitch from "./RouteSwitch";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routeswitch />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
