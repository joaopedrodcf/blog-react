import styled from 'styled-components';

const Container = styled.button`
  background: none;
  border: none;
  display: none;

  @media (max-width: 700px) {
    display: unset;
  }
`;

export default Container;
