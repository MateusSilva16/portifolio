import styled from 'styled-components';
import tokens from '../../../utils/tokens';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  width: 100%;
  padding-bottom: 20px;

  h1 {
    font-size: 30px;
    background: ${tokens.colors.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 900px) {
    align-items: center;
    margin-top: 40px;
  }
`;

export const Content = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: auto auto auto;
  grid-area: auto;

  @media (max-width: 1024px) {
    grid-template-columns: auto auto;
  }

  @media (max-width: 900px) {
    grid-template-columns: auto;
  }
`;

export const ContentImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 250px;
  border-radius: 8px;
  cursor: pointer;
  position: relative;

  div {
    display: none;
  }

  :hover {
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      z-index: 100;
      background: rgba(0, 0, 0, 0.9);
      height: 100%;
      width: 100%;

      h3 {
        font-size: 20px;
        position: absolute;

        animation: slide 0.5s forwards;

        @keyframes slide {
          from {
            margin-bottom: 0px;
          }

          to {
            margin-bottom: 150px;
          }
        }
      }
    }
  }

  @media (max-width: 1440px) {
    width: 400px;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const ImageCard = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: relative;
`;

export const Image = styled.img`
  @media (max-width: 768px) {
    display: none;
  }
  object-fit: cover;
  width: 100%;
  position: relative;
  border-radius: 18px;
  display: flex;
`;

export const ImageMobile = styled.img`
  @media (max-width: 768px) {
    display: flex;
    object-fit: cover;
    width: 100%;
    height: 100%;
    object-position: top;
    position: relative;
    border-radius: 18px;
  }
  display: none;
`;
