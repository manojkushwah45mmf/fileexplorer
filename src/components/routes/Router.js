import React from "react";
import Sidebar from "../Dashboard/Sidebar";
import Dashboardlayout from "../Dashboard/Dashboardlayout";
import { BrowserRouter, Switch, Route } from "react-router-dom";
const Router = () => {
  return (
    <BrowserRouter basename="">
      <Switch>
        <Route path="/web-dashboard" component={Dashboardlayout} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
