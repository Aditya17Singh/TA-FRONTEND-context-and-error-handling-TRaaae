import React from "react";
import { Switch, Route } from "react-router-dom";
import Article from "./Article";
import Help from "./Help";

function Main() {
  return (
    <>
      <Switch>
        <Route path="/article">
          <Article />
        </Route>
        <Route path="/help">
          <Help />
        </Route>
      </Switch>
    </>
  );
}
export default Main;
