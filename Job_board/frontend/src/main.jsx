import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./Layout";
import store from "../src/redux/store";
import { Provider } from "react-redux";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Layout>
        <App />
      </Layout>
    </Provider>
  </React.StrictMode>
);
