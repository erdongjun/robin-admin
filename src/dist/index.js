"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var react_router_dom_1 = require("react-router-dom");
var home_layout_1 = require("./page/home-layout");
var login_1 = require("./page/login");
var home_1 = require("./page/home");
react_dom_1["default"].render(react_1["default"].createElement(react_router_dom_1.BrowserRouter, null,
    react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/home", component: home_layout_1["default"] }),
    react_1["default"].createElement(react_router_dom_1.Route, { exact: true, path: "/login", component: login_1["default"] }),
    react_1["default"].createElement(react_router_dom_1.Route, { path: "/", component: home_1["default"] }),
    react_1["default"].createElement(react_router_dom_1.Redirect, { to: "/" })), document.getElementById('root'));
