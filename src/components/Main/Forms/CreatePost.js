import React from 'react';
import axios from 'axios';

import { Label, ErrorLabel, Form, Button } from './style';

// Reset state https://stackoverflow.com/questions/34845650/clearing-state-es6-react
const initialState = {
  title: '',
  description: '',
  text: '',
  image: '',
  dirty: {
    title: false,
    description: false,
    text: false,
    image: false
  },
  error: {
    title: true,
    description: true,
    text: true,
    image: true
  }
};

export default class CreatePost extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;

    this.endpoint = '/api/post';
    this.url = process.env.REACT_APP_API_HOST + this.endpoint;

    this.sendMessage = this.sendMessage.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validate = this.validate.bind(this);
    this.removeImage = this.removeImage.bind(this);
  }

  sendMessage(event) {
    event.preventDefault();

    const { title, description, text, image } = this.state;

    const formData = new FormData();

    formData.append('title', title);
    formData.append('description', description);
    formData.append('text', text);
    formData.append('image', image);

    console.log(formData);
    axios.post(this.url, formData).then(result => {
      console.log(result);
    });

    this.setState(initialState);
  }

  // https://blog.stvmlbrn.com/2017/12/17/upload-files-using-react-to-node-express-server.html
  handleChange(event) {
    const { value, name } = event.target;

    switch (name) {
      case 'image':
        this.setState({
          image: event.target.files[0],
          dirty: { ...this.state.dirty, image: true }
        });
        break;
      default:
        this.setState(({ test = false }) => ({
          [name]: value,
          dirty: { ...this.state.dirty, [name]: !test || test }
        }));
    }

    console.log(this.state);
    this.validate(event);
  }

  validate(event) {
    const { value, name } = event.target;

    switch (name) {
      case 'image':
        this.setState({
          error: {
            ...this.state.error,
            image: event.target.files[0] === 0
          }
        });
        break;
      default:
        this.setState({
          error: {
            ...this.state.error,
            [name]: value.length === 0
          }
        });
    }

    console.log(this.state);
  }

  // https://stackoverflow.com/questions/47468101/upload-files-in-react-js
  removeImage = () => {
    document.querySelector('input[type=file]').value = '';
  };

  render() {
    const { title, description, text, error } = this.state;

    const hasErrors = Object.keys(error).some(x => error[x]);

    const shouldMarkError = field => {
      const hasError = error[field];
      const shouldShow = this.state.dirty[field];

      return hasError ? shouldShow : false;
    };

    return (
      <div>
        <Form noValidate onSubmit={this.sendMessage}>
          <h1>Create your post</h1>
          <Label htmlFor="title">
            Title:
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={this.handleChange}
            />
          </Label>
          {shouldMarkError('title') && (
            <ErrorLabel>Your title can&apos;t be empty</ErrorLabel>
          )}
          <Label htmlFor="description">
            Description:
            <textarea
              name="description"
              placeholder="Description"
              value={description}
              onChange={this.handleChange}
            />
          </Label>
          {shouldMarkError('description') && (
            <ErrorLabel>Your description can&apos;t be empty</ErrorLabel>
          )}
          <Label htmlFor="text">
            Text:
            <textarea
              name="text"
              placeholder="Text"
              value={text}
              onChange={this.handleChange}
            />
          </Label>
          {shouldMarkError('text') && (
            <ErrorLabel>Your text can&apos;t be empty</ErrorLabel>
          )}

          <input type="file" name="image" onChange={this.handleChange} />

          {shouldMarkError('image') && (
            <ErrorLabel>Your image can&apos;t be empty</ErrorLabel>
          )}

          {this.state.image && (
            <button onClick={this.removeImage}>Remove image</button>
          )}

          <Button type="submit" value="Submit" disabled={hasErrors}>
            Send message
          </Button>
        </Form>
      </div>
    );
  }
}
