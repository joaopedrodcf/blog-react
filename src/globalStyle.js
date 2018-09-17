import { injectGlobal } from 'styled-components';

const textXs = '1.4rem';
const textSm = '1.6rem';
const textMd = '1.8rem';
const textLg = '2rem';
// const textXl = '2.2rem';
const textXxl = '2.4rem';

const globalCss = injectGlobal`
    body,
    html,
    #root {
        height: 100%;
        font-size: 62.5%;
    }

    * {
        box-sizing: border-box;
        font-size: ${textSm};
        padding: 0;
        margin: 0;
        font-family: 'Open Sans', sans-serif;
    }

    h1 {
        font-size: ${textXxl} ;
    }

    h2 {
        font-size: ${textLg};
    }

    h3 {
        font-size: ${textMd};
    }

    h4 {
        font-size: ${textSm};
    }

    h5 {
        font-size: ${textXs};
    }

    p {
        font-size: ${textMd};
    }

    a,
    a:active {
        font-size: ${textMd};
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
