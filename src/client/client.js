import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routes from "./Routes";
import store from "./redux";
import { renderRoutes } from "react-router-config";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>{renderRoutes(Routes)}</BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
