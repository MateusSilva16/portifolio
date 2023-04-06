import React, { useState } from 'react';
import * as S from './styles';
import {
  AiFillPhone,
  AiOutlineMail,
  AiTwotoneEnvironment,
} from 'react-icons/ai';
import { MdPhotoCamera } from 'react-icons/md';
import { KnowledgeProps, OnlineCourses } from './data';
import { Modal } from '../../Modal';

const Info = () => {
  const [modal, setModal] = useState(false);

  const Open = () => {
    setModal(true);
  };

  const Close = () => {
    setModal(false);
  };

  return (
    <>
      {modal && (
        <Modal close={Close}>
          <S.ImageModal src="/img/imgProfile.jpg" />
        </Modal>
      )}
      <S.Container>
        <S.ContainerProfile>
          <S.ContainerImage onClick={Open}>
            <div>
              <MdPhotoCamera size={30} />
            </div>
            <S.Image src="/img/imgProfile.jpg" />
          </S.ContainerImage>
          <h1>Mateus Silva</h1>
          <S.Profession>Desenvolvedor</S.Profession>
          <S.Address>
            <S.ItemAddress>
              <S.Icon>
                <AiFillPhone />
              </S.Icon>
              <div>
                <span>Telefone</span>
                <h4>(84) 99126-2988</h4>
              </div>
            </S.ItemAddress>
            <S.ItemAddress>
              <S.Icon>
                <AiOutlineMail />
              </S.Icon>
              <div>
                <span>Email</span>
                <h4>oliveiramateus245@gmail.com</h4>
              </div>
            </S.ItemAddress>
            <S.ItemAddress>
              <S.Icon>
                <AiTwotoneEnvironment />
              </S.Icon>

              <div>
                <span>Localização</span>
                <h4>Parnamirim-RN</h4>
              </div>
            </S.ItemAddress>
          </S.Address>
          <S.LinkButton href="https://drive.google.com/u/0/uc?id=1y45-wiIJ8VWz3J9Q_mySdYiXBVQTQ8WX&export=download">
            Download currículo
          </S.LinkButton>
        </S.ContainerProfile>

        <S.ContainerDescription>
          <div>
            <>
              <S.Title>
                Sobre <S.Border />
              </S.Title>

              <S.Description>
                Óla, tudo bem ?<br />
                Sou Mateus de Oliveira Silva, e venho estudando bastante por
                meio da internet, entre video aulas e cursos onlines em algumas
                plataformas de ensino online, não tenho formação em nível
                superior ainda, mas busco conseguir ingressar em alguma
                instituição. Trabalhei na empresa{' '}
                <a href="https://github.com/ZAX-systems" target="_blank">
                  Zax Soluções Tecnologicas
                </a>{' '}
                durante 4 meses como estágiario
              </S.Description>
            </>
            <>
              <S.Title>
                Formação <S.Border />
              </S.Title>

              <S.Description>Ensino Médio completo</S.Description>
            </>

            <>
              <S.Title>
                Cursos Online <S.Border />
              </S.Title>
              <S.Description>
                {OnlineCourses.map((item, index) => {
                  return (
                    <S.Courses key={index}>
                      <h4>{item.courses} :</h4>{' '}
                      <a href={item.href} target="_blank">
                        {item.platform}
                      </a>{' '}
                      <br />
                    </S.Courses>
                  );
                })}
              </S.Description>
            </>
            <>
              <S.Title>
                Conhecimentos
                <S.Border />
              </S.Title>
              <S.Description>
                <S.Lista>
                  {KnowledgeProps.map((item, index) => {
                    return (
                      <S.ListaItem key={index}>
                        <S.IconTecnologica>{item.icon}</S.IconTecnologica>
                        <h5>{item.name}</h5>
                      </S.ListaItem>
                    );
                  })}
                </S.Lista>
              </S.Description>
            </>
          </div>
        </S.ContainerDescription>
      </S.Container>
    </>
  );
};

export default Info;
