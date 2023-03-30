import styled from 'styled-components';
import tokens from '../../../utils/tokens';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin-top: 50px;
  padding: 40px 0;
  gap: 20px;
  overflow: hidden;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const ContainerProfile = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 20%;
  border-radius: 10px;
  background: ${tokens.colors.dark};
  position: relative;
  gap: 10px;
  animation: profile 1s forwards;

  @keyframes profile {
    to {
      left: 0px;
    }
    from {
      left: -100%;
    }
  }

  h1 {
    margin: 0;
    background: ${tokens.colors.gradient};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: column;
    justify-content: start;
  }
`;

export const Address = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${tokens.colors.container};
  border-radius: 8px;
  margin: 0;
  padding: 0.5em;
  width: 75%;

  @media (max-width: 1024px) {
    width: 60%;
  }

  @media (max-width: 450px) {
    width: 70%;
  }
`;

export const ItemAddress = styled.li`
  display: flex;
  align-items: flex-end;
  color: ${tokens.colors.light};
  padding: 0.2em 0;
  div {
    margin-left: 5px;
  }
  span {
    color: ${tokens.colors.secondary3};
    font-size: 12px;
  }
  h4 {
    font-size: 10px;
    margin: 0;
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${tokens.colors.dark};
  background-color: ${tokens.colors.secondary3};
  width: 30px;
  height: 30px;
`;

export const ContainerImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 100%;
  position: relative;
  top: -60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 8px solid ${tokens.colors.secondary3};
  cursor: pointer;

  div {
    display: none;
  }
  :hover {
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      border-radius: 100%;
      background: rgba(0, 0, 0, 0.9);
      position: absolute;
      z-index: 100;
    }
  }

  @media (max-width: 1024px) {
    position: relative;
    top: 10px;
    margin-top: 10px;
    border-radius: 10px;
    border: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  position: relative;

  @media (max-width: 1024px) {
    border-radius: 10px;
  }
`;

export const ImageModal = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Profession = styled.p`
  padding: 0.8em 2em;
  background: ${tokens.colors.container};
  border-radius: 5px;
  font-size: 15px;
`;

export const LinkButton = styled.a`
  text-decoration: none;
  padding: 1em;
  background: ${tokens.colors.gradient};
  color: ${tokens.colors.light};
  border-radius: 5px;
  font-size: 15px;
  border-radius: 50px;
  margin: 20px 0;
`;

//Description

export const ContainerDescription = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 80%;
  border-radius: 10px;
  padding: 0;
  background: ${tokens.colors.dark};
  flex-wrap: wrap;
  overflow: hidden;
  position: relative;
  animation: description 1s forwards;

  @keyframes description {
    to {
      right: 0px;
    }
    from {
      right: -100%;
    }
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 30px;
  margin-left: 30px;
  color: ${tokens.colors.light};
  gap: 1rem;

  @media (max-width: 500px) {
    font-size: 20px;
  }
`;

export const Border = styled.div`
  content: '';
  background: ${tokens.colors.gradient};
  height: 3px;
  width: 30%;
  border-radius: 50px;
  margin-top: 15px;
`;

export const Description = styled.p`
  color: ${tokens.colors.light};
  margin: 10px 40px;
  line-height: 1.4rem;
  font-weight: 100;
  font-size: 16px;

  a {
    text-decoration: none;
    font-weight: bold;
    color: ${tokens.colors.secondary3};
  }

  @media (max-width: 500px) {
    font-size: 12px;
  }
`;

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 15% 15% auto;
  margin-bottom: 0;
  padding: 0;

  @media (max-width: 768px) {
    grid-template-columns: 15% 15% 20% 26% auto;
    gap: 10px;
  }

  @media (max-width: 660px) {
    grid-template-columns: auto auto;
    gap: 10px;
  }

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 10px;
  }
`;

export const ListaItem = styled.li`
  display: flex;

  h5 {
    margin: 0;
  }
`;

export const IconTecnologica = styled.div`
  margin-right: 10px;
`;

export const Courses = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;

  h4 {
    font-weight: bold;
    margin: 0.5px;
  }

  a {
    text-decoration: none;
    color: ${tokens.colors.light};
    font-weight: 100;
    cursor: pointer;

    :hover {
      transform: scale(1.1);
      margin-left: 15px;
      transition: 0.5s;
      text-decoration: underline;
    }
  }

  @media (max-width: 700px) {
    align-items: flex-start;
    flex-direction: column;
    h4 {
      font-size: 12px;
    }

    a {
      font-size: 12px;
    }
  }
`;
