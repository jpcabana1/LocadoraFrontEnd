import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import FormUser from "./components/CrudUsers/FormUser";
import { store } from "./store/store";

ReactDOM.render(
  <Provider store={store}>
    <FormUser />
  </Provider>,
  document.getElementById("root")
);
