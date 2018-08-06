import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';

import { Label, ErrorLabel, Form, Button } from './style';

function sendMessage(values, { resetForm }) {
  const { name, email, message } = values;

  const endpoint = '/api/send-email';
  const url = process.env.REACT_APP_API_HOST + endpoint;

  axios
    .post(url, {
      name,
      email,
      message
    })
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });

  resetForm();
}

function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.message) {
    errors.message = 'Required';
  }

  if (!values.name) {
    errors.name = 'Required';
  }

  return errors;
}

const ContactFormik = () => (
  <div>
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: ''
      }}
      validate={values => validate(values)}
      onSubmit={(values, ...rest) => sendMessage(values, ...rest)}
      render={({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        dirty
      }) => (
        <Form onSubmit={handleSubmit}>
          <h1>Contact me for more info</h1>
          <Label htmlFor="name">
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
          </Label>
          <ErrorLabel>
            {' '}
            {touched.name && errors.name && <div>{errors.name}</div>}
          </ErrorLabel>

          <Label htmlFor="email">
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
          </Label>
          <ErrorLabel>
            {' '}
            {touched.email && errors.email && <div>{errors.email}</div>}
          </ErrorLabel>

          <Label htmlFor="message">
            <textarea
              name="message"
              placeholder="Message"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.message}
            />
          </Label>
          <ErrorLabel>
            {' '}
            {touched.message && errors.message && <div>{errors.message}</div>}
          </ErrorLabel>
          <Button
            type="submit"
            disabled={
              (Object.keys(errors).length !== 0 && !isSubmitting) || !dirty
            }
          >
            Submit
          </Button>
        </Form>
      )}
    />
  </div>
);

export default ContactFormik;