import styled from 'styled-components';
import tokens from '../../../utils/tokens';

export const Container = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  top: 10px;
  padding: 0.2em 0;
  z-index: 1000;
`;

export const Lista = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0;
`;

export const ContainerIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  right: 60px;
  top: 0;
  text-transform: uppercase;
`;

export const Icons = styled.a`
  margin: 0 0.5em;
  cursor: pointer;
  color: ${tokens.colors.light};
  :hover {
    transform: scale(1.2);
    transition: 0.5s;
  }
`;
