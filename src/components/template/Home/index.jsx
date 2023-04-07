import { useEffect } from 'react';
import Button from '../../Button';
import * as S from './styles';
import Typical from 'react-typical';
import { BsCloudDownload, BsInfoCircle } from 'react-icons/bs';

const Home = () => {
  return (
    <S.Conatainer>
      <S.ContainerImages>
        <S.Overlay />
        <S.Image src="/img/imgBackground.jpg" alt="" />
      </S.ContainerImages>
      <S.ContainerDescription>
        <S.HelloContainer>
          Hello
          <div />
        </S.HelloContainer>
        <S.Title>
          <h1> Eu sou </h1>
          <Typical
            loop={Infinity}
            wrapper="true"
            steps={[
              '',
              1000,
              'Mateus Silva',
              3000,
              'Desenvolvedor Júnior',
              3000,
              'Front end',
              3000,
            ]}
          />
        </S.Title>
        <p>
          Busco oportunidades no mercado do desenvolvimento web, tenho
          conhecimento e facilidade com estilização de sites, e me aperfeiçoando
          cada dia mais com a lógica.
        </p>
        <S.ContainerButtons>
          <S.LinkButton
            to={
              'https://drive.google.com/u/0/uc?id=1DtGgRPwg0SffwNhXUmFE-EfEjA4KQpyt&export=download'
            }
          >
            <div>
              <BsCloudDownload size={15} />
            </div>
            <div>Currículo</div>
          </S.LinkButton>

          <S.LinkButton to={'/info'}>
            <div>
              <BsInfoCircle size={15} />
            </div>
            <div>Informações</div>
          </S.LinkButton>
        </S.ContainerButtons>
      </S.ContainerDescription>
    </S.Conatainer>
  );
};

export default Home;
