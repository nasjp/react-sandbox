import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router";
import AppHeader from "./AppHeader";
import "./App.css";

const App: FC<{}> = () => (
  <>
    <AppHeader />
    <Switch>
      <Route path="/" />
      <Redirect to="/" />;
    </Switch>
  </>
);

export default App;
