import React from 'react';
import axios from 'axios';

import { Label, ErrorLabel, Form, Button, Alert } from './style';

// Reset state https://stackoverflow.com/questions/34845650/clearing-state-es6-react
const initialState = {
  name: '',
  email: '',
  message: '',
  dirty: {
    email: false,
    name: false,
    message: false
  },
  error: {
    email: true,
    name: true,
    message: true
  },
  result: ''
};

export default class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.endpoint = '/send-email';
    this.url = process.env.REACT_APP_API_HOST + this.endpoint;

    this.sendMessage = this.sendMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
  }

  sendMessage(event) {
    event.preventDefault();

    const { name, email, message } = this.state;

    axios
      .post(this.url, {
        name,
        email,
        message
      })
      .then(() => {
        this.setState(...initialState, { result: true });
      })
      .catch(() => {
        this.setState(...initialState, { result: false });
      });
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

    if (name === 'name' || name === 'message') {
      this.setState({
        error: {
          ...this.state.error,
          [name]: value.length === 0
        }
      });
    }

    if (name === 'email') {
      this.setState({
        error: {
          ...this.state.error,
          [name]: !/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(value)
        }
      });
    }
  }

  // solution for validation https://goshakkk.name/instant-form-fields-validation-react/
  render() {
    const { name, email, message, error, result } = this.state;

    const hasErrors = Object.keys(error).some(x => error[x]);

    const shouldMarkError = field => {
      const hasError = error[field];
      const shouldShow = this.state.dirty[field];

      return hasError ? shouldShow : false;
    };

    return (
      <div>
        <Form noValidate onSubmit={this.sendMessage}>
          <h1>Contact me for more info</h1>
          <Label htmlFor="name">
            Name:
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={this.handleChange}
            />
          </Label>

          {shouldMarkError('name') && (
            <ErrorLabel>Your name can&apos;t be empty</ErrorLabel>
          )}

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
            <ErrorLabel>You must use a valid email</ErrorLabel>
          )}

          <Label htmlFor="name">
            Message:
            <textarea
              name="message"
              placeholder="Message"
              value={message}
              onChange={this.handleChange}
            />
          </Label>

          {shouldMarkError('message') && (
            <ErrorLabel>Your message can&apos;t be empty</ErrorLabel>
          )}

          {result && <Alert error={false}>Thanks for contacting me</Alert>}

          {result === false && (
            <Alert error>There was an error contacting me</Alert>
          )}

          <Button type="submit" value="Submit" disabled={hasErrors}>
            Send message
          </Button>
        </Form>
      </div>
    );
  }
}
