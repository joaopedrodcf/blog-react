import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Container from './style';

import Home from './Home/Home';
import Contact from './Contact/Contact';
import PostDetailed from './PostDetailed/PostDetailed';
import Login from './Login/Login';
import Register from './Register/Register';

const ProtectedRoute = ({ isAuthenticated, ...props }) =>
  !isAuthenticated ? <Route {...props} /> : <Redirect to="/" />;

// Use render instead of component to pass props
const Main = props => (
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contactme" component={Contact} />
      <ProtectedRoute
        {...props}
        exact
        path="/login"
        render={() => <Login {...props} />}
      />
      <Route
        {...props}
        exact
        path="/register"
        render={() => <Register {...props} />}
      />
      <Route exact path="/post/:id" component={PostDetailed} />
    </Switch>
  </Container>
);

export default Main;
