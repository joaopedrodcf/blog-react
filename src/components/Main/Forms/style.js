import styled from 'styled-components';

export const Form = styled.form`
    background-color: ${props => props.theme.color.blue.dark};
    box-shadow: ${props => props.theme.shadow.gray};
    padding: ${props => props.theme.space.xl};
    border-radius: ${props => props.theme.space.xs};
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.color.white};

    > h1 {
        text-align: center;
    }
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.color.white};
    font-size: ${props => props.theme.typography.md};
    padding-top: ${props => props.theme.space.md};

    > input,
    textarea {
        border: none;
        box-shadow: ${props => props.theme.shadow.black};
        padding: ${props => props.theme.space.md};
        border-radius: ${props => props.theme.space.xs};
    }
`;

export const ErrorLabel = styled.span`
    color: ${props => props.theme.color.red.light};
    margin-bottom: 1rem;
`;

export const Button = styled.button`
    grid-area: button;
    box-shadow: ${props => props.theme.shadow.black};
    border: none;
    background-color: ${props => props.theme.color.blue.light};
    padding: 15px;
    margin: 10px 0;
    border-radius: ${props => props.theme.space.xs};

    &:disabled,
    &[disabled]:hover {
        background-color: ${props => props.theme.color.gray.dark};
        transform: scale(1);
        color: ${props => props.theme.color.gray.light};
    }

    &:hover {
        transform: scale(1.01);
        background-color: ${props => props.theme.color.blue.light};
    }
`;

export const Alert = styled.div`
    box-shadow: ${props => props.theme.shadow.black};
    padding: 10px;
    border-radius: ${props => props.theme.space.xs};
    text-align: center;
    ${props => !props.error && 'background-color: blue;'};
    ${props => props.error && 'background-color: red;'};
`;

export const Image = styled.img`
    border-radius: ${props => props.theme.space.xs};
    ${props => props.src && 'width: 20rem;height: 20rem;'};
    box-shadow: 0 2px 4px ${props => props.theme.shadow.black};
    background-color: ${props => props.theme.color.gray.dark};
`;

export const LabelFile = styled.label`
    box-shadow: ${props => props.theme.shadow.dark};
    border: none;
    background-color: ${props => props.theme.color.blue.default};
    padding: ${props => props.theme.space.lg};
    margin: ${props => props.theme.space.md} 0;
    border-radius: ${props => props.theme.space.xs};
    text-align: center;
    cursor: pointer;

    &:hover {
        transform: scale(1.01);
        background-color: ${props => props.theme.color.blue.light};
    }

    > input[type='file'] {
        width: 100%;
        height: 100%;
        display: none;
    }
`;
