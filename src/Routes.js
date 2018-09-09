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
    colorWhite: '#FFFFFF',
    colorGrayLight: '#DDDDDD',
    colorGrayDark: '#AAAAAA',
    colorBlack: '#111111'
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
