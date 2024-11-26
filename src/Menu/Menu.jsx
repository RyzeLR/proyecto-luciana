import AOS from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';
import {
  CardContainer,
  CardImage,
  MenuBackground,
  MenuContainer,
  MenuImage,
} from './MenuStyles';

export const Menu = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duración de las animaciones
      once: false, // Las animaciones solo se ejecutan una vez
    });
  }, []);

  return (
    <MenuContainer>
      <CardContainer>
        <MenuBackground>
          <MenuImage src="./public/logomenu.png" alt="Menú Logo" />
        </MenuBackground>

        {/* Aplicando AOS a las imágenes */}
        <CardImage
          src="./public/chivito.png"
          alt="Chivito"
          data-aos="fade-up"
          data-aos-delay="100"
        />
        <CardImage
          src="./public/humita.png"
          alt="Humita"
          data-aos="fade-right"
          data-aos-delay="200"
        />
        <CardImage
          src="./public/locro.png"
          alt="Locro"
          data-aos="fade-left"
          data-aos-delay="300"
        />
      </CardContainer>
    </MenuContainer>
  );
};