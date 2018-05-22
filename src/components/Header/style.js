import styled from 'styled-components';

export const Container = styled.header`
  align-items: center;
  background-color: #13293d;
  background-position: center;
  background-size: cover;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  grid-area: header;
  justify-content: space-between;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: unset;
  }

  /* Children style */
  > * {
    background-color: #13293d;
  }
`;

export const ContainerLogoIcon = styled.div`
  display: flex;
  justify-content: space-between;
`;
