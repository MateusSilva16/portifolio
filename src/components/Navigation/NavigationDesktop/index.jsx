import * as S from './styles';
import { BsLinkedin, BsGithub, BsEnvelopeAtFill } from 'react-icons/bs';
import ItemMenu from '../ItemMenu';

const NavigationDesktop = () => {
  return (
    <S.Container>
      <S.Lista>
        <ItemMenu text={'Inicio'} url={'/'} />
        <ItemMenu text={'Sobre'} url={'/info'} />
        <ItemMenu text={'Projetos'} url={'/project'} />
      </S.Lista>
      <S.ContainerIcons>
        <S.Icons
          href="https://www.linkedin.com/in/mateus-oliveira-a26b69246/"
          target="_blank"
        >
          <BsLinkedin />
        </S.Icons>
        <S.Icons href="https://github.com/MateusSilva16" target="_blank">
          <BsGithub />
        </S.Icons>
        <S.Icons
          href="mailto:oliveiramateus246@gmail.com"
          rel="noreferrer"
          target="_blank"
        >
          <BsEnvelopeAtFill />
        </S.Icons>
      </S.ContainerIcons>
    </S.Container>
  );
};

export default NavigationDesktop;
