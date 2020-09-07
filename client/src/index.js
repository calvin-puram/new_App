import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Register from "./screens/Register";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path='/' exact render={(props) => <App {...props} />} />
        <Route path='/register' render={(props) => <Register {...props} />} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
