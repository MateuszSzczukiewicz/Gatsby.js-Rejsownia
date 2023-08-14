import React from 'react';
import {
  Address,
  Gallery,
  OfferDescription,
  OfferDetailsList,
  OfferTitle,
  StyledContentWrapper,
} from 'assets/styles/pages/rejsy.styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const galleryOptions = {
  showStatus: false,
  showThumbs: false,
  infiniteLoop: true,
};

const Grecja = () => (
  <StyledContentWrapper>
    <OfferTitle>
      <Address>{oferta.adres}</Address>
      <HighlightedHeading>{oferta.tytul}</HighlightedHeading>
    </OfferTitle>
    <Gallery>
      <Carousel {...galleryOptions}>
        {oferta.galeria.map((item) => (
          <img src={item.file.url} key={item.file.url} alt="" />
        ))}
      </Carousel>
    </Gallery>
  </StyledContentWrapper>
);

export default Grecja;
