import styled from 'styled-components';

export const Form = styled.form`
  background-color: rgba(27, 152, 224, 0.4);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  padding: 30px;
  border-radius: 2px;
  display: flex;
  flex-direction: column;

  > h1 {
    text-align: center;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  font-size: 1.1em;
  color: rgba(33, 37, 41, 1);

  > input,
  textarea {
    border: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    padding: 10px;
    border-radius: 2px;
  }
`;

export const ErrorLabel = styled.span`
  font-size: 0.8em;
  color: rgba(240, 55, 77, 0.75);
  margin-bottom: 10px;
`;

export const Button = styled.button`
  grid-area: button;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  border: none;
  background-color: rgba(27, 152, 224, 0.5);
  padding: 15px;
  margin: 10px 0;
  border-radius: 2px;

  &:disabled,
  &[disabled]:hover {
    border: 1px solid #999;
    background-color: #ccc;
    transform: scale(1);
    color: #666;
  }

  &:hover {
    transform: scale(1.04);
    background-color: rgba(27, 152, 224, 0.9);
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
