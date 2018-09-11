import { injectGlobal } from 'styled-components';

const globalCss = injectGlobal`
    body,
    html,
    #root {
        height: 100%;
        font-size: 62.5%;
    }

    * {
        box-sizing: border-box;
        font-size: 1.6rem;
    }

    h1 {
        font-size: 2.4rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.8rem;
    }

    h4 {
        font-size: 1.6rem;
    }

    h5 {
        font-size: 1.4rem;
    }

    p {
        font-size: 1.8rem;
    }

    a,
    a:active {
        font-size: 1.8rem;
        outline: none;
    }
`;
/*
    *:not(path):not(g) {
        color: hsla(210, 100%, 100%, 0.9) !important;
        background: hsla(210, 100%, 50%, 0.5) !important;
        outline: solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;
        box-shadow: none !important;
    }
*/

export default globalCss;
