# blog-react

Blog created with React and styled-components

## Prerequisites

This project requires you to use this backend as its API: [blog-react-backend](https://github.com/joaopedrodcf/blog-react-backend)

## Website

The website is hosted in github pages: [blog-react](https://joaopedrodcf.github.io/blog-react)

## Functionalities

- [x] Contact me: sends emails
- [x] Register: creating user with password encrypted with bcrypt
- [x] Login: JWT request the token with the token that is saved in local storage
- [x] Posts: Its working with pagination, showing all the posts separated by pages
- [x] Protected routes: If user is authenticated can access /login or /register
- [x] Create posts: Users loggedin can create posts
- [x] Create posts: Image upload through cloudinary
- [x] Create posts: Shows the email of the user who created it
- [ ] Posts: Users can comment posts
- [ ] Posts: Like button(A user can only like one time per post)
- [ ] Asked funcionality: Favicon
- [ ] Asked funcionality: Show appname on broser
- [ ] Asked funcionality: Hash of password in front end(Before the request) !?
- [ ] Asked funcioanlity: Rules for a complex password(uppercase, lowercase, one number, etc)

## Getting Started

First clone the project

```shell
git clone https://github.com/joaopedrodcf/blog-react.git
```

Then install the node_modules

```shell
yarn
```

Finally

```shell
yarn start
```

Now its ready to use

## Creating production builds

Steps needed:

- Commits wanted in master branch
- After you run the following command and the site will have your changes after some minutes

```shell
yarn run deploy
```

## Built With

- [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
- [formik](https://github.com/jaredpalmer/formik) - Build forms in React, without the tears 😭
- [normalize.css](https://github.com/necolas/normalize.css) - A modern alternative to CSS resets
- [react](https://github.com/facebook/react) - A declarative, efficient, and flexible JavaScript library for building user interfaces
- [react-router](https://github.com/ReactTraining/react-router) - Declarative routing for React
- [redux](https://github.com/reduxjs/redux) - Predictable state container for JavaScript apps
- [redux-thunk](https://github.com/reduxjs/redux-thunk) - Thunk middleware for Redux
- [redux-logger](https://github.com/evgenyrodionov/redux-logger) - Logger for Redux
- [styled-components](https://github.com/styled-components/styled-components) - Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress 💅

## Misc

- [npm](https://github.com/npm/npm) - Package manager for javascript
- [yarn](https://github.com/yarnpkg/yarn/) - 📦🐈 Fast, reliable, and secure dependency management.
- [node](https://github.com/nodejs/node) - Node.js JavaScript runtime ✨🐢🚀✨
- [google-fonts](https://github.com/google/fonts) - Font files available from Google Fonts
- [1001freefonts](https://www.1001freefonts.com/edo.font) - 1001 free fonts
- [coolors](https://coolors.co/) - The super fast color schemes generator!

## my project setup

- [babel](https://github.com/babel/babel) - 🐠 Babel is a compiler for writing next generation JavaScript.
- [babel-eslint](https://github.com/babel/babel-eslint) - 🗼 A wrapper for Babel's parser used for ESLint
- [eslint](https://github.com/eslint/eslint) - A fully pluggable tool for identifying and reporting on patterns in JavaScript
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) - Turns off all rules that are unnecessary or might conflict with Prettier.
- [eslint-plugin-flowtype](https://github.com/gajus/eslint-plugin-flowtype)- Flow type linting rules for ESLint.
- [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - React specific linting rules for ESLint
- [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11) - Static AST checker for a11y rules on JSX elements.
- [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import) - ESLint plugin with rules that help validate proper imports.
- [eslint-plugin-babel](https://github.com/babel/eslint-plugin-babel) - An ESlint rule plugin companion to babel-eslint
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) - ESLint plugin for prettier formatting
- [flow](https://github.com/facebook/flow) - Adds static typing to JavaScript to improve developer productivity and code quality.
- [flow-bin](https://github.com/flowtype/flow-bin) - Binary wrapper for Flow - A static type checker for JavaScript
- [gh-pages](https://github.com/tschaub/gh-pages) - General purpose task for publishing files to a gh-pages branch on GitHub
- [husky](https://github.com/typicode/husky) - 🐶 Git hooks made easy
- [javascript](https://github.com/airbnb/javascript) - JavaScript Style Guide
- [lint-staged](https://github.com/okonet/lint-staged) - 🚫💩 — Run linters on git staged files
- [prettier](https://github.com/prettier/prettier) - Prettier is an opinionated code formatter.
- [stylelint](https://github.com/stylelint/stylelint) -  A mighty, modern CSS linter
- [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) - The standard shareable config for stylelint
- [stylelint-config-styled-components](https://github.com/styled-components/stylelint-config-styled-components) - The shareable stylelint config for stylelint-processor-styled-components
- [stylelint-processor-styled-components](https://github.com/styled-components/stylelint-processor-styled-components) - Lint your styled components with stylelint!

## Docs

- This docs contains useful information that helped me build this React app and there references
- It can be useful in other projects and for others

### Inject global css ThemeProvider from styled-components

In globalStyle.js

```javascript
injectGlobal`
    body,
    html,
    #root {
        height: 100%;
    }
`;
```

[source info](https://egghead.io/lessons/react-style-the-body-element-with-styled-components-and-injectglobal)

### Add ThemeProvider from styled-components

In Routes.js

```javascript
<ThemeProvider theme={theme}>
        <Global>
            <HeaderContainer />
            <MainContainer />
            <Footer />
        </Global>
</ThemeProvider>
```

[source info](https://egghead.io/lessons/react-theme-your-application-with-styled-components-and-themeprovider)

### Remove dotter link borders mobile

```css
a:active {
    outline: none;
}
```

[source info](https://css-tricks.com/snippets/css/remove-dotted-link-borders)

### Debug for css

```css
*:not(path):not(g) {
    color:                    hsla(210, 100%, 100%, 0.9) !important;
    background:               hsla(210, 100%,  50%, 0.5) !important;
    outline:    solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;
    box-shadow: none !important;
}
```

[source info](https://medium.freecodecamp.org/heres-my-favorite-weird-trick-to-debug-css-88529aa5a6a3)

### Inject global css directly in your app

In your globalCss file

```js
const globalCss = injectGlobal`
`;

export default globalCss;
```

Then in your main app

```js
import './globalStyle';
```

[source info](https://stackoverflow.com/questions/42675725/isolated-styled-components-with-font-face)

### Prevent red shadow in required inputs on firefox

```css
box-shadow: none;
```

[source info](https://stackoverflow.com/questions/3809146/firefox-4-required-input-form-red-border-outline)