import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router";
import Header from "./pages/Header";
import Home from "./pages/Home";
import "./App.css";

const App: FC<{}> = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Redirect to="/" />;
    </Switch>
  </>
);

export default App;
