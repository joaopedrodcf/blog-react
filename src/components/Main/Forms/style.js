import styled from 'styled-components';

const borderRadius = props => props.theme.space.md;
const shadowBlack = props => props.theme.shadow.black;

export const Wrapper = styled.div`
    width: 100%;
    background-color: ${props => props.theme.color.blue.dark};
    display: flex;
    position: relative;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`;

export const Figure = styled.img`
    width: 40%;
    object-fit: cover;
    box-shadow: ${props => props.theme.shadow.black};

    @media (max-width: 800px) {
        position: absolute;
        z-index: 1;
        width: 100%;
        height: 100%;
        right: 0;
    }
`;
export const Form = styled.form`
    padding: ${props => props.theme.space.xxl} ${props => props.theme.space.xl}
        ${props => props.theme.space.xl} ${props => props.theme.space.xl};
    border-radius: ${borderRadius};
    display: flex;
    flex-direction: column;
    color: ${props => props.theme.color.white};
    width: 60%;

    z-index: 2;

    > h1 {
        text-align: center;
    }

    @media (max-width: 800px) {
        width: 100%;
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
        border-radius: ${borderRadius};
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
    border-radius: ${borderRadius};

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
    border-radius: ${borderRadius};
    text-align: center;
    ${props => !props.error && 'background-color: blue;'};
    ${props => props.error && 'background-color: red;'};
`;

export const Image = styled.img`
    border-radius: ${borderRadius};
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
    border-radius: ${borderRadius};
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

export const WrapperTitle = styled.div`
    position: absolute;
    background-color: ${props => props.theme.color.blue.light};
    top: ${props => props.theme.space.lg};
    left: -${props => props.theme.space.xl};
    padding: ${props => props.theme.space.sm} ${props => props.theme.space.xl};
    text-transform: uppercase;
    box-shadow: ${shadowBlack};
`;
