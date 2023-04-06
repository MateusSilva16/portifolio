import React, { useEffect, useState } from 'react';
import * as S from './styles';
import { BsZoomIn } from 'react-icons/bs';
import tokens from '../../../utils/tokens';
import { PersonalProjectProps, PrivateProjectProps } from './data';
import SwpierCustom from '../../Carousel';
import { SwiperSlide } from 'swiper/react';
import { Modal } from '../../Modal';
import { useLocation } from 'react-router-dom';

const Project = () => {
  const [modalBudget, setModalBudget] = useState(false);
  const [modalFilmesECinemas, setModalFilmesECinemas] = useState(false);
  const [modalGeneral, setModalGeneral] = useState(false);
  const [modalZax, setModalZax] = useState(false);
  const [modalContablidade, setModalContablidade] = useState(false);
  const [isOpened, setIsOpened] = useState(false);

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

              <S.ImageMobile src="/img/projectsImg/budget/mobile1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/budget/tela2.png" />

              <S.ImageMobile src="/img/projectsImg/budget/mobile2.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/budget/tela3.png" />

              <S.ImageMobile src="/img/projectsImg/budget/mobile3.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/budget/tela4.png" />

              <S.ImageMobile src="/img/projectsImg/budget/mobile4.png" />
            </SwiperSlide>
          </SwpierCustom>
        </Modal>
      )}

      {modalFilmesECinemas && (
        <Modal close={Close}>
          <SwpierCustom>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/filmes_games/tela1.png" />

              <S.ImageMobile src="/img/projectsImg/filmes_games/mobile1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/filmes_games/tela2.png" />

              <S.ImageMobile src="/img/projectsImg/filmes_games/mobile2.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/filmes_games/tela3.png" />

              <S.ImageMobile src="/img/projectsImg/filmes_games/mobile3.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/filmes_games/tela4.png" />

              <S.ImageMobile src="/img/projectsImg/filmes_games/mobile4.png" />
            </SwiperSlide>
          </SwpierCustom>
        </Modal>
      )}

      {modalGeneral && (
        <Modal close={Close}>
          <SwpierCustom>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/general/tela1.png" />

              <S.ImageMobile src="/img/projectsImg/general/mobile1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/general/tela2.png" />

              <S.ImageMobile src="/img/projectsImg/general/mobile2.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/general/tela3.png" />

              <S.ImageMobile src="/img/projectsImg/general/mobile3.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/general/tela4.png" />

              <S.ImageMobile src="/img/projectsImg/general/mobile4.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/general/tela5.png" />

              <S.ImageMobile src="/img/projectsImg/general/mobile5.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/general/tela6.png" />

              <S.ImageMobile src="/img/projectsImg/general/mobile6.png" />
            </SwiperSlide>
          </SwpierCustom>
        </Modal>
      )}

      {modalZax && (
        <Modal close={Close}>
          <SwpierCustom>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/zax/tela1.png" />

              <S.ImageMobile src="/img/projectsImg/zax/mobile1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/zax/tela2.png" />

              <S.ImageMobile src="/img/projectsImg/zax/mobile3.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/zax/tela3.png" />

              <S.ImageMobile src="/img/projectsImg/zax/mobile4.png" />
            </SwiperSlide>
          </SwpierCustom>
        </Modal>
      )}

      {modalContablidade && (
        <Modal close={Close}>
          <SwpierCustom>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/contabilade/tela1.png" />

              <S.ImageMobile src="/img/projectsImg/contabilade/mobile1.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/contabilade/tela2.png" />

              <S.ImageMobile src="/img/projectsImg/contabilade/mobile3.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/contabilade/tela3.png" />

              <S.ImageMobile src="/img/projectsImg/contabilade/mobile4.png" />
            </SwiperSlide>
            <SwiperSlide>
              <S.Image src="/img/projectsImg/contabilade/tela4.png" />

              <S.ImageMobile src="/img/projectsImg/contabilade/mobile5.png" />
            </SwiperSlide>
          </SwpierCustom>
        </Modal>
      )}
    </>
  );
};

export default Project;
