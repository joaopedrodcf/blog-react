import React from 'react';
import { Formik } from 'formik';
import axios from 'axios';

import { Label, ErrorLabel, Form, Button } from './style';

function createPost(values, { resetForm }) {
    const { title, description, text, image } = values;

    const endpoint = '/api/post';
    const url = process.env.REACT_APP_API_HOST + endpoint;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('text', text);
    formData.append('image', image);

    // const headers = new Headers();
    const token = localStorage.getItem('token');

    const headers = {
        'x-access-token': token,
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    const config = {
        headers
    };

    axios
        .post(url, formData, config)
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.log(error);
        });

    resetForm();
    document.querySelector('input[type=file]').value = '';
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = 'Required';
    }

    if (!values.description) {
        errors.description = 'Required';
    }

    if (!values.text) {
        errors.text = 'Required';
    }

    if (!values.image) {
        errors.image = 'Required';
    }

    return errors;
}

const CreatePostFormik = () => (
    <div>
        <Formik
            initialValues={{
                title: '',
                description: '',
                text: '',
                image: ''
            }}
            validate={values => validate(values)}
            onSubmit={(values, ...rest) => createPost(values, ...rest)}
            render={({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                dirty,
                setFieldValue
            }) => (
                <Form onSubmit={handleSubmit}>
                    <h1>Create your post</h1>
                    <Label htmlFor="title">
                        Title:
                        <input
                            type="text"
                            name="title"
                            placeholder="Title"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.title}
                        />
                    </Label>
                    <ErrorLabel>
                        {' '}
                        {touched.title &&
                            errors.title && <div>{errors.title}</div>}
                    </ErrorLabel>

                    <Label htmlFor="description">
                        Description:
                        <textarea
                            name="description"
                            placeholder="Description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                        />
                    </Label>
                    <ErrorLabel>
                        {' '}
                        {touched.description &&
                            errors.description && (
                                <div>{errors.description}</div>
                            )}
                    </ErrorLabel>

                    <Label htmlFor="text">
                        Text:
                        <textarea
                            name="text"
                            placeholder="Text"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.text}
                        />
                    </Label>
                    <ErrorLabel>
                        {' '}
                        {touched.text &&
                            errors.text && <div>{errors.text}</div>}
                    </ErrorLabel>

                    <input
                        id="image"
                        name="image"
                        type="file"
                        onChange={event => {
                            setFieldValue(
                                'image',
                                event.currentTarget.files[0]
                            );
                        }}
                    />

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
                </Form>
            )}
        />
    </div>
);

export default CreatePostFormik;
