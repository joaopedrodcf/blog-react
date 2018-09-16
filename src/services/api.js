import axios from 'axios';

const urlLogin = `${process.env.REACT_APP_API_HOST}/api/login`;
const urlRegister = `${process.env.REACT_APP_API_HOST}/api/register`;
const urlPost = `${process.env.REACT_APP_API_HOST}/api/post`;
const urlContact = `${process.env.REACT_APP_API_HOST}/api/send-email`;
const urlGetPosts = `${process.env.REACT_APP_API_HOST}/api/posts/`;
const urlGetPost = `${process.env.REACT_APP_API_HOST}/api/post/`;

export function loginService(email, password) {
    return axios
        .post(urlLogin, {
            email,
            password
        })
        .then(response => {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('email', email);
        });
}

export function registerService(email, password) {
    return axios
        .post(urlRegister, {
            email,
            password
        })
        .then(response => {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('email', email);
        });
}

export function logoutService() {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
}

export function createPostService(title, description, text, image) {
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('text', text);
    formData.append('image', image);

    const token = localStorage.getItem('token');

    const headers = {
        'x-access-token': token,
        'Content-Type': 'application/x-www-form-urlencoded'
    };

    const config = {
        headers
    };

    return axios.post(urlPost, formData, config);
}

export function contactService(name, email, message) {
    return axios.post(urlContact, {
        name,
        email,
        message
    });
}

export function getPostsService(page, currentPage, isMinus, isPlus) {
    let curPage = page;

    if (isMinus) {
        curPage = currentPage - 1;
    } else if (isPlus) {
        curPage = currentPage + 1;
    }

    return axios.get(urlGetPosts + curPage);
}

export function getPost(id) {
    return axios.get(urlGetPost + id);
}
