import styled from 'styled-components';
import tokens from '../../utils/tokens';

export const ButtonCuston = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  border: 2px transparent solid;
  background-color: ${tokens.colors.secondary4};
  color: ${tokens.colors.light};
  margin: 0 0.2em;
  font-size: 0.5em;
  text-transform: uppercase;
  cursor: pointer;

  div {
    margin: 0 0.2em;
  }

  :hover {
    background-color: ${tokens.colors.light};
    color: ${tokens.colors.primary};
    border: 2px ${tokens.colors.primary} solid;
  }
`;
