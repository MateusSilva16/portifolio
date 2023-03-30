import { Link } from 'react-router-dom';
import styled from 'styled-components';
import tokens from '../../../utils/tokens';

export const Conatainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: black;
`;

export const ContainerDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  padding: 0.5em 1em;
  background-color: ${tokens.colors.dark};
  flex-direction: column;
  border-radius: 8px;
  color: ${tokens.colors.light};
  position: absolute;
  top: 30%;
  margin-left: 50px;
  animation: content 1s forwards;
  z-index: 1000;

  @keyframes content {
    to {
      left: 0px;
    }
    from {
      left: -100%;
    }
  }

  p {
    font-size: 15px;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color:  ${tokens.colors.secondary4};;

  h1 {
    font-size: 40px;
    margin-right: 0.3em;
    color: ${tokens.colors.light};
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0.5em 0;
`;

export const HelloContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-end;
  width: 100%;
  font-size: 30px;
  padding: 0;
  margin: 0;
  font-weight: 100;

  div {
    width: 23px;
    height: 2px;
    background-color: ${tokens.colors.primary};
    border-radius: 50px;
    margin-bottom: 9px;
    margin-left: 2px;
  }
`;

//Image

export const ContainerImages = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-end;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  z-index: 10;
`;
export const Overlay = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 100;
  background: linear-gradient(
    96deg,
    rgba(0, 0, 0) 50%,
    rgba(0, 0, 0, 0.1) 100%
  );
`;
export const Image = styled.img`
  object-fit: contain;
  position: absolute;
`;

export const ImageBackground = styled.img`
  width: 90%;
  object-fit: contain;
  position: absolute;
  z-index: 10;

  animation: iconBackground 5s infinite;

  @keyframes iconBackground {
    0% {
      top: 25%;
    }
    50% {
      top: 26%;
    }
    100% {
      top: 25%;
    }
  }
`;

export const LinkButton = styled(Link)`
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
  text-decoration: none;

  div {
    margin: 0 0.2em;
  }

  :hover {
    background-color: ${tokens.colors.light};
    color: ${tokens.colors.primary};
    border: 2px ${tokens.colors.primary} solid;
  }
`;
