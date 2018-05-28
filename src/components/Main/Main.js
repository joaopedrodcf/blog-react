import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Container from './style';

import Home from './Home/Home';
import Contact from './Contact/Contact';

const Main = () => (
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contactme" component={Contact} />
    </Switch>
  </Container>
);

export default Main;
