import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

const el = document.getElementById("root");

const root = ReactDOM.createRoot(el);

root.render(
  <StrictMode>
    <Provider store={createStore(reducers)}>
      <br />
      <App />
    </Provider>
  </StrictMode>
);
