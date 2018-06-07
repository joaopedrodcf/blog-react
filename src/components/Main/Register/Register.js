import React from 'react';
import axios from 'axios';

import { Label, ErrorLabel, Form, Button } from './style';

// Reset state https://stackoverflow.com/questions/34845650/clearing-state-es6-react
const initialState = {
  email: '',
  password: '',
  dirty: {
    email: false,
    password: false
  },
  error: {
    email: true,
    password: true,
    global: false
  }
};

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.register = this.register.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  register(event) {
    event.preventDefault();

    const { email, password } = this.state;
    axios
      .post('http://localhost:8000/api/register', {
        email,
        password
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });

    this.setState(initialState);
  }

  handleChange(event) {
    const { value, name } = event.target;

    // https://scotch.io/tutorials/password-strength-meter-in-react , dirty based on this tut
    this.setState(({ test = false }) => ({
      [name]: value,
      dirty: { ...this.state.dirty, [name]: !test || test }
    }));

    this.validate(event);
  }

  validate(event) {
    const { value, name } = event.target;

    if (name === 'email' || name === 'password') {
      this.setState({
        error: {
          ...this.state.error,
          [name]: value.length === 0
        }
      });
    }
  }

  // solution for validation https://goshakkk.name/instant-form-fields-validation-react/
  render() {
    const { email, password, error } = this.state;

    const hasErrors = Object.keys(error).some(x => error[x]);

    const shouldMarkError = field => {
      const hasError = error[field];
      const shouldShow = this.state.dirty[field];

      return hasError ? shouldShow : false;
    };

    return (
      <div>
        <Form noValidate onSubmit={this.register}>
          <h1>Register</h1>

          <Label htmlFor="email">
            Email:
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
            />
          </Label>

          {shouldMarkError('email') && (
            <ErrorLabel>Your email can&apos;t be empty</ErrorLabel>
          )}

          <Label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
            />
          </Label>

          {shouldMarkError('password') && (
            <ErrorLabel>Your password can&apos;t be empty</ErrorLabel>
          )}

          {shouldMarkError('global') && (
            <ErrorLabel>
              The email and password do not match our records
            </ErrorLabel>
          )}

          <Button type="submit" value="Submit" disabled={hasErrors}>
            Send message
          </Button>
        </Form>
      </div>
    );
  }
}
