import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Container from './style';

import Home from './Home/Home';
import PostDetailed from './PostDetailed/PostDetailed';
import ContactFormik from './Forms/ContactFormik';
import Login from './Forms/Login';
import Register from './Forms/Register';
import CreatePost from './Forms/CreatePost';

const RouteUnauthenticated = ({ isAuthenticated, ...props }) =>
  !isAuthenticated ? <Route {...props} /> : <Redirect to="/" />;

const RouteAuthenticated = ({ isAuthenticated, ...props }) =>
  isAuthenticated ? <Route {...props} /> : <Redirect to="/" />;

// Use render instead of component to pass props
const Main = props => (
  <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contactme" component={ContactFormik} />
      <RouteUnauthenticated
        {...props}
        exact
        path="/login"
        render={() => <Login {...props} />}
      />
      <RouteUnauthenticated
        {...props}
        exact
        path="/register"
        render={() => <Register {...props} />}
      />
      <RouteAuthenticated
        {...props}
        exact
        path="/create-post"
        render={() => <CreatePost {...props} />}
      />
      <Route exact path="/post/:id" component={PostDetailed} />
    </Switch>
  </Container>
);

export default Main;
