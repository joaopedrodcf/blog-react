# blog-react

Blog created with React and styled-components

# Website

https://joaopedrodcf.github.io/blog-react

## Functionalities working

- Contact me: is sending emails
- Register: creating user with password encrypted with bcrypt
- Login: JWT request the token is saved in local storage
- Posts: Its working with pagination, showing all the posts separated by pages
- Protected routes: if user is authenticated can access /login or /register
- Create posts: Users loggedin can create posts
- Create posts: Image upload through cloudinary

## NEXT Functionalities

- Users can create comments
- When a user creates a post it shows on the post who created the post
- Like button, a user can like a post only one time per user

## Asked functionalities
- favicon e o app name
- hash password in front end before request
- Validate passwords like one uppercase, one lowercase, one number, etc

## Getting Started

First just

```
git clone https://github.com/joaopedrodcf/blog-react.git
```

Then

```
yarn install
```

Finally

```
yarn start
```

Now its ready to use

### Prerequisites

You need to install Node.js

To use the eslint in VSCODE use this configurations:

* [cra-eslint-flow-babel-prettier](https://github.com/joaopedrodcf/cra-eslint-flow-babel-prettier) - A project with CRA already configurated with eslint, flow, babel and prettier

## Creating production builds (TODO)

You will work with the master branch
After pushing your changes to the repository
You just have to run this commands

```
yarn run build
```

```
yarn run deploy
```

And after some minutes the site will be live with your changes

## Built With

* [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* [formik](https://github.com/jaredpalmer/formik) - Build forms in React, without the tears 😭
* [normalize.css](https://github.com/necolas/normalize.css) - A modern alternative to CSS resets
* [react](https://github.com/facebook/react) - A declarative, efficient, and flexible JavaScript library for building user interfaces
* [react-router](https://github.com/ReactTraining/react-router) - Declarative routing for React
* [redux](https://github.com/reduxjs/redux) - Predictable state container for JavaScript apps
* [redux-thunk](https://github.com/reduxjs/redux-thunk) - Thunk middleware for Redux
* [redux-logger](https://github.com/evgenyrodionov/redux-logger) - Logger for Redux
* [styled-components](https://github.com/styled-components/styled-components) - Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress 💅


## Misc

* [npm](https://github.com/npm/npm) - Package manager for javascript
* [yarn](https://github.com/yarnpkg/yarn/) - 📦🐈 Fast, reliable, and secure dependency management.
* [node](https://github.com/nodejs/node) - Node.js JavaScript runtime ✨🐢🚀✨
* [google-fonts](https://github.com/google/fonts) - Font files available from Google Fonts
* [1001freefonts](https://www.1001freefonts.com/edo.font) - 1001 free fonts
* [coolors](https://coolors.co/) - The super fast color schemes generator!

## my project setup

* [babel](https://github.com/babel/babel) - 🐠 Babel is a compiler for writing next generation JavaScript.
* [babel-eslint](https://github.com/babel/babel-eslint) - 🗼 A wrapper for Babel's parser used for ESLint
* [eslint](https://github.com/eslint/eslint) - A fully pluggable tool for identifying and reporting on patterns in JavaScript
* [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - Turns off all rules that are unnecessary or might conflict with Prettier. 
* [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype)- Flow type linting rules for ESLint.
* [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - React specific linting rules for ESLint
* [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11) - Static AST checker for a11y rules on JSX elements.
* [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - ESLint plugin with rules that help validate proper imports.
* [eslint-plugin-babel](https://github.com/babel/eslint-plugin-babel) - An ESlint rule plugin companion to babel-eslint
* [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) - ESLint plugin for prettier formatting
* [flow](https://github.com/facebook/flow) - Adds static typing to JavaScript to improve developer productivity and code quality.
* [flow-bin](https://github.com/flowtype/flow-bin) - Binary wrapper for Flow - A static type checker for JavaScript
* [gh-pages](https://github.com/tschaub/gh-pages) - General purpose task for publishing files to a gh-pages branch on GitHub
* [husky](https://github.com/typicode/husky) - 🐶 Git hooks made easy
* [javascript](https://github.com/airbnb/javascript) - JavaScript Style Guide
* [lint-staged](https://github.com/okonet/lint-staged) - 🚫💩 — Run linters on git staged files 
* [prettier](https://github.com/prettier/prettier) - Prettier is an opinionated code formatter.
* [stylelint](https://github.com/stylelint/stylelint) -  A mighty, modern CSS linter
* [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) - The standard shareable config for stylelint 
* [stylelint-config-styled-components](https://github.com/styled-components/stylelint-config-styled-components) - The shareable stylelint config for stylelint-processor-styled-components
* [stylelint-processor-styled-components](https://github.com/styled-components/stylelint-processor-styled-components) - Lint your styled components with stylelint! 

# Docs

- This docs contains useful information that helped me build this React app and there references
- It can be useful in other projects and for others

## index.js

```javascript
injectGlobal`
    body,
    html,
    #root {
        height: 100%;
    }
`;
```

- Inject global css
- source: https://egghead.io/lessons/react-style-the-body-element-with-styled-components-and-injectglobal

```javascript
injectGlobal`
    body,
    html,
    #root {
        height: 100%;
    }
`;
```

- Inject theme css
- source: https://egghead.io/lessons/react-theme-your-application-with-styled-components-and-themeprovider


```css
a:active {
    outline: none;
}
```
- Remove dotted link borders on mobile!
- source:  https://css-tricks.com/snippets/css/remove-dotted-link-borders/

```css
*:not(path):not(g) {
    color:                    hsla(210, 100%, 100%, 0.9) !important;
    background:               hsla(210, 100%,  50%, 0.5) !important;
    outline:    solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;

    box-shadow: none !important;
}
```
- CSS DEBUG
- https://medium.freecodecamp.org/heres-my-favorite-weird-trick-to-debug-css-88529aa5a6a3

```js
```

- Isolate injectGlobal
- https://stackoverflow.com/questions/42675725/isolated-styled-components-with-font-face