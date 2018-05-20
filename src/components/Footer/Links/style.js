import styled from 'styled-components';

const Link = styled.a`
  margin-left: 20px;
  display: inline-block;
  transition: 0.3s;
  font-weight: bold;
  text-decoration: none;
  color: #e8f1f2;
  margin-bottom: 10px;
  &:hover {
    transform: scale(1.2);
  }
`;

export default Link;
