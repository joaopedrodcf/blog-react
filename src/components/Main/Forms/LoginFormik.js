import React from 'react';
import { Formik } from 'formik';

import { Label, ErrorLabel, Form, Button } from './style';

function handleLogin(values, login, { resetForm }) {
  const { email, password } = values;
  login(email, password);
  resetForm();
}

function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
}

const LoginFormik = ({ login }) => (
  <div>
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      validate={values => validate(values)}
      onSubmit={(values, ...rest) => handleLogin(values, login, ...rest)}
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
          <h1>Login</h1>

          <Label htmlFor="email">
            Email:
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

          <Label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
          </Label>

          <ErrorLabel>
            {' '}
            {touched.password &&
              errors.password && <div>{errors.password}</div>}
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

export default LoginFormik;