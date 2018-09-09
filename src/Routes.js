import React from 'react';
import { ThemeProvider } from 'styled-components';
import Global from './style';
import HeaderContainer from './components/Header/HeaderContainer';
import MainContainer from './components/Main/MainContainer';
import Footer from './components/Footer/Footer';

const theme = {
    colorPrimary: '#0074D9',
    colorPrimaryLight: '#7FDBFF',
    colorPrimaryDark: '#001f3f',
    colorGrayLight: '#DDDDDD',
    colorGrayDark: '#AAAAAA',
    colorBlack: '#111111',
    colorYellow: '#FFDC00',
    colorRed: '#FF4136',
    colorRedDark: '#85144b',
    colorWhite: '#FFFFFF'
};

const Routes = () => (
    <ThemeProvider theme={theme}>
        <Global>
            <HeaderContainer />
            <MainContainer />
            <Footer />
        </Global>
    </ThemeProvider>
);

export default Routes;
