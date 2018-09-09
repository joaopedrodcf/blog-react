import styled from 'styled-components';

export const Form = styled.form`
    background-color: ${props => props.theme.colorPrimaryDark};
    box-shadow: 0 2px 4px ${props => props.theme.colorGrayDark};
    padding: 30px;
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.colorWhite};

    > h1 {
        text-align: center;
    }
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
    color: ${props => props.theme.colorWhite};
    font-size: 1.8rem;

    > input,
    textarea {
        border: none;
        box-shadow: 0 2px 4px ${props => props.theme.colorBlack};
        padding: 1rem;
        border-radius: 2px;
    }
`;

export const ErrorLabel = styled.span`
    color: ${props => props.theme.colorRed};
    margin-bottom: 1rem;

    > div {
        font-size: 1.4rem;
    }
`;

export const Button = styled.button`
    grid-area: button;
    box-shadow: 0 2px 4px ${props => props.theme.colorBlack};
    border: none;
    background-color: ${props => props.theme.colorPrimary};
    padding: 15px;
    margin: 10px 0;
    border-radius: 2px;

    &:disabled,
    &[disabled]:hover {
        background-color: ${props => props.theme.colorGrayDark};
        transform: scale(1);
        color: ${props => props.theme.colorGrayLight};
    }

    &:hover {
        transform: scale(1.01);
        background-color: ${props => props.theme.colorPrimaryLight};
    }
`;

export const Alert = styled.div`
    box-shadow: 0 2px 4px ${props => props.theme.colorBlack};
    padding: 10px;
    border-radius: 2px;
    text-align: center;
    ${props => !props.error && 'background-color: blue;'};
    ${props => props.error && 'background-color: red;'};
`;

export const Image = styled.img`
    border-radius: 2px;
    ${props => props.src && 'width: 20rem;height: 20rem;'};
    box-shadow: 0 2px 4px ${props => props.theme.colorBlack};
    background-color: ${props => props.theme.colorGrayDark};
`;

export const LabelFile = styled.label`
    box-shadow: 0 2px 4px ${props => props.theme.colorBlack};
    border: none;
    background-color: ${props => props.theme.colorPrimary};
    padding: 15px;
    margin: 10px 0;
    width: 10rem;
    border-radius: 2px;
    text-align: center;
    cursor: pointer;

    &:hover {
        transform: scale(1.01);
        background-color: ${props => props.theme.colorPrimaryLight};
    }

    > input[type='file'] {
        width: 100%;
        height: 100%;
        display: none;
    }
`;
