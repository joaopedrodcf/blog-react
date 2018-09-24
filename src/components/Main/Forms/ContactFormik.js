import React from 'react';
import { Formik } from 'formik';

import {
    Label,
    ErrorLabel,
    Form,
    Button,
    WrapperTitle,
    Wrapper,
    Figure,
    Input,
    WrapperButton,
    TextArea,
    Column
} from './style';
import { contactService } from '../../../services/api';

function sendMessage(values, { resetForm }) {
    const { name, email, message } = values;

    contactService(name, email, message).then(
        () => {
            resetForm();
        },
        () => {
            resetForm();
        }
    );
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

    if (!values.message) {
        errors.message = 'Required';
    }

    if (!values.name) {
        errors.name = 'Required';
    }

    return errors;
}

const ContactFormik = () => (
    <Wrapper>
        <Column>
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
                        <WrapperTitle>
                            <h3>Contact us</h3>
                        </WrapperTitle>
                        <Label htmlFor="name">
                            Name
                            <Input
                                type="text"
                                name="name"
                                placeholder="Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                        </Label>
                        <ErrorLabel>
                            {touched.name &&
                                errors.name && <div>{errors.name}</div>}
                        </ErrorLabel>

                        <Label htmlFor="email">
                            Email
                            <Input
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                        </Label>
                        <ErrorLabel>
                            {touched.email &&
                                errors.email && <div>{errors.email}</div>}
                        </ErrorLabel>

                        <Label htmlFor="message">
                            Message
                            <TextArea
                                name="message"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.message}
                            />
                        </Label>
                        <ErrorLabel>
                            {touched.message &&
                                errors.message && <div>{errors.message}</div>}
                        </ErrorLabel>
                        <WrapperButton>
                            <Button
                                type="submit"
                                disabled={
                                    (Object.keys(errors).length !== 0 &&
                                        !isSubmitting) ||
                                    !dirty
                                }
                            >
                                Send message
                            </Button>
                        </WrapperButton>
                    </Form>
                )}
            />
        </Column>
        <Column>
            <Figure
                src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1ab326a2c7bef3a9641e7c7c89c2919c&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb"
                alt="about-me-img"
            />
        </Column>
    </Wrapper>
);

export default ContactFormik;
