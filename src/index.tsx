import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import HomeLayout from "./page/home-layout";
import Login from "./page/login";
import Home from "./page/home";

ReactDOM.render(
  <BrowserRouter>
    {/* <Route exact path="/login" component={Login} />
    <Route path="/" component={HomeLayout}>
      <Route path="home" component={Home} />
    </Route> */}
    <Route exact path="/login" component={Login} />
    <Route path="/" component={Home} />
    <Redirect to="/" />
  </BrowserRouter>,
  document.getElementById("root")
);
