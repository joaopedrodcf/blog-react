import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from './style';

import Home from './Home/Home';
import Contact from './Contact/Contact';
import PostDetailed from './PostDetailed/PostDetailed';
import Login from './Login/Login';
import Register from './Register/Register';

const Main = () => (
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contactme" component={Contact} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/post/:id" component={PostDetailed} />
    </Switch>
  </Container>
);

export default Main;
