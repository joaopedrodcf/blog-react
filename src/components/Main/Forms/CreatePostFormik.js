import React, { Component } from 'react';
import { Formik } from 'formik';

import {
    Label,
    ErrorLabel,
    Form,
    Button,
    Image,
    LabelFile,
    WrapperTitle
} from './style';
import { createPostService } from '../../../services/api';

function createPost(values, { resetForm }) {
    const { title, description, text, image } = values;

    createPostService(title, description, text, image).then(
        () => {
            resetForm();
            document.querySelector('input[type=file]').value = '';
        },
        () => {
            resetForm();
            document.querySelector('input[type=file]').value = '';
        }
    );
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

class CreatePostFormik extends Component {
    constructor(props) {
        super(props);

        this.state = {
            file: null
        };
    }

    imagePreview(event) {
        this.setState({
            file: URL.createObjectURL(event.target.files[0])
        });
    }

    render() {
        const { file } = this.state;
        return (
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
                            <WrapperTitle>
                                <h3>Create your post</h3>
                            </WrapperTitle>
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

                            <LabelFile htmlFor="image">
                                Image:
                                <input
                                    id="image"
                                    name="image"
                                    type="file"
                                    onChange={event => {
                                        this.imagePreview(event);

                                        setFieldValue(
                                            'image',
                                            event.currentTarget.files[0]
                                        );
                                    }}
                                />
                            </LabelFile>

                            <Image src={file} />

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
    }
}

export default CreatePostFormik;
