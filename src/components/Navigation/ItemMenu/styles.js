import styled from 'styled-components';
import tokens from '../../../utils/tokens';
import { Link } from 'react-router-dom';

export const LinkCuston = styled(Link)`
  text-decoration: none;
`;

export const Item = styled.li`
  display: flex;
  text-decoration: none;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
    transition: 0.9;
  }
`;

export const ContainerText = styled.h5`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 400;
  margin: 0 0.5em;
  color: ${tokens.colors.light};
`;
