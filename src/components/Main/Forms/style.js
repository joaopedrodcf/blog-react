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
    margin: 10px 0;
    font-size: 1.1em;
    color: ${props => props.theme.colorWhite};

    > input,
    textarea {
        border: none;
        box-shadow: 0 2px 4px ${props => props.theme.colorBlack};
        padding: 10px;
        border-radius: 2px;
    }
`;

export const ErrorLabel = styled.span`
    font-size: 0.8em;
    color: ${props => props.theme.colorRed};
    margin-bottom: 10px;
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
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    padding: 10px;
    border-radius: 2px;
    text-align: center;
    ${props => !props.error && 'background-color: blue;'};
    ${props => props.error && 'background-color: red;'};
`;
