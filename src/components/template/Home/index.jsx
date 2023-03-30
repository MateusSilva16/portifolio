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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ipsum
          odit dignissimos ex molestias, delectus minus rem inventore
          voluptatibus fuga suscipit nulla aut, dicta error molestiae voluptatem
          voluptate quis? Molestiae.
        </p>
        <S.ContainerButtons>
          <Button
            action={console.log('Currículo')}
            text={'Currículo'}
            icon={<BsCloudDownload size={15} />}
          />
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
