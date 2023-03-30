import styled from 'styled-components';
import tokens from '../utils/tokens';

export const Conatainer = styled.div`
  background-color: ${tokens.colors.container};
  height: 100%;
  padding: 0px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  font-size: calc(10px + 2vmin);
  color: ${tokens.colors.light};


  @media (max-width: 700px) {
    padding: 0px 20px;
  }
`;
