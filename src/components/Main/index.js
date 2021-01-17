import React from "react";
import { Route, Switch } from "react-router-dom";
import Users from "../Users";
import UserDetail from "../Users/UserDetail";
import NoMatch from "../NoMatch";
import "./style.css";

const Main = (props) => {
  return (
    <div className="main">
      <Switch>
        <Route path="/" exact component={Users} />
        <Route path="/:id" exact component={UserDetail} />
        <Route path="/*" component={NoMatch} />
      </Switch>
    </div>
  );
};

export default Main;
