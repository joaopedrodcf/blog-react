import styled from 'styled-components';

const Container = styled.button`
  background: none;
  border: none;
  display: none;

  @media (max-width: 600px) {
    display: unset;
    color: rgba(255, 255, 255, 0.9);
  }
`;

export default Container;
