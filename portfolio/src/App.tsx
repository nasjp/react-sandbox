import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router";
import Header from "./components/Header";
import Home from "./components/Home";
import "./App.css";

const App: FC<{}> = () => (
  <>
    <Header />
    <Switch>
      <Route path="/" component={Home} />
      <Redirect to="/" />;
    </Switch>
  </>
);

export default App;
