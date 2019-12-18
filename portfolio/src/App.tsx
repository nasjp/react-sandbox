import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router";
import Header from "./pages/Header";
import Home from "./pages/Home";
import "./App.css";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const App: FC<{}> = () => (
  <>
    <Header />
    <Container className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Redirect to="/" />;
      </Switch>
    </Container>
  </>
);

export default App;
