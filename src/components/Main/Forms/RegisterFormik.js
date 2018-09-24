import React from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

import {
    Label,
    ErrorLabel,
    Form,
    Button,
    WrapperTitle,
    Wrapper,
    Figure
} from './style';

function handleRegister(values, register, { resetForm }) {
    const { email, password } = values;
    register(email, password);
    resetForm();
}

function validate(values) {
    const errors = {};

    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    }

    return errors;
}

const RegisterFormik = ({ register }) => (
    <Wrapper>
        <Formik
            initialValues={{
                email: '',
                password: ''
            }}
            validate={values => validate(values)}
            onSubmit={(values, ...rest) =>
                handleRegister(values, register, ...rest)
            }
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
                    <WrapperTitle>
                        <h3>Register</h3>
                    </WrapperTitle>

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
                        {touched.email &&
                            errors.email && <div>{errors.email}</div>}
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
                            (Object.keys(errors).length !== 0 &&
                                !isSubmitting) ||
                            !dirty
                        }
                    >
                        Submit
                    </Button>
                </Form>
            )}
        />
        <Figure
            src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d15da0da74c68d59d0b9c68e501941c7&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"
            alt="about-me-img"
        />
    </Wrapper>
);

RegisterFormik.propTypes = {
    register: PropTypes.func.isRequired
};

export default RegisterFormik;
