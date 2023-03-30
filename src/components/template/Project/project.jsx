import React from 'react';
import * as S from './styles';
import { BsZoomIn } from 'react-icons/bs';
import tokens from '../../../utils/tokens';
import { PersonalProjectProps, PrivateProjectProps } from './data';
import SwpierCustom from '../../Carousel';
import { SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { Modal } from '../../Modal';

const Project = () => {
  const [modalBudget, setModalBudget] = useState(false);
  const [modalFilmesECinemas, setModalFilmesECinemas] = useState(false);
  const [modalGeneral, setModalGeneral] = useState(false);
  const [modalZax, setModalZax] = useState(false);
  const [modalContablidade, setModalContablidade] = useState(false);

  /*   const Open = () => {
    setModalBudget(true);
  };
*/
  const Close = () => {
    setModalBudget(false);
    setModalFilmesECinemas(false);
    setModalGeneral(false);
    setModalZax(false);
    setModalContablidade(false);
  };

  return (
    <>
      <S.Container>
        <div>
          <h1>Projetos Pessoais</h1>
          <S.Content>
            {PersonalProjectProps.map((item, index) => (
              <S.ContentImage
                key={index}
                onClick={() => {
                  setModalBudget(item.active1);
                  setModalFilmesECinemas(item.active2);
                }}
              >
                <div>
                  <BsZoomIn size={40} color={tokens.colors.light} />
                  <h3>{item.name}</h3>
                </div>
                <S.ImageCard src={item.src} />
              </S.ContentImage>
            ))}
          </S.Content>
        </div>
        <div>
          <h1>Projetos Zax Soluções Tecnologicas</h1>
          <S.Content>
            {PrivateProjectProps.map((item, index) => (
              <S.ContentImage
                key={index}
                onClick={() => {
                  setModalGeneral(item.active3);
                  setModalZax(item.active4);
                  setModalContablidade(item.active5);
                }}
              >
                <div>
                  <BsZoomIn size={40} color={tokens.colors.light} />
                  <h3>{item.name}</h3>
                </div>
                <S.ImageCard src={item.src} />
              </S.ContentImage>
            ))}
          </S.Content>
        </div>
      </S.Container>

      {/*  //Modal */}

      {modalBudget && (
        <Modal close={Close}>
          <SwpierCustom>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/budget/tela1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/budget/tela2.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/budget/tela3.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/budget/tela4.png" />
            </SwiperSlide>
          </SwpierCustom>
        </Modal>
      )}

      {modalFilmesECinemas && (
        <Modal close={Close}>
          <SwpierCustom>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/filmes_games/tela1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/filmes_games/tela2.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/filmes_games/tela3.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/filmes_games/tela4.png" />
            </SwiperSlide>
          </SwpierCustom>
        </Modal>
      )}

      {modalGeneral && (
        <Modal close={Close}>
          <SwpierCustom>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/general/tela1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/general/tela2.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/general/tela3.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/general/tela4.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/general/tela5.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/general/tela6.png" />
            </SwiperSlide>
          </SwpierCustom>
        </Modal>
      )}

      {modalZax && (
        <Modal close={Close}>
          <SwpierCustom>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/zax/tela1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/zax/tela2.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/zax/tela3.png" />
            </SwiperSlide>
          </SwpierCustom>
        </Modal>
      )}

      {modalContablidade && (
        <Modal close={Close}>
          <SwpierCustom>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/contabilade/tela1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/contabilade/tela2.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/contabilade/tela3.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/contabilade/tela4.png" />
            </SwiperSlide>
          </SwpierCustom>
        </Modal>
      )}
    </>
  );
};

export default Project;
