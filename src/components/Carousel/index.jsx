import React, { useRef, useState } from 'react';
import { EffectCards } from 'swiper';
import { Container } from './styles';
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";



export default function SwpierCustom({ settings, children }) {
  return (
    <Container>
      <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
      >
        {children}
      </Swiper>
    </Container>
  );
}
