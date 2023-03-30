import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const Content = styled.div`
  z-index: 10000;
`;

export const ButtonClose = styled.button`
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 10px;
  border: none;
  z-index: 100000;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
`;
