import React from 'react';
import { graphql } from 'gatsby';
import {
  Place,
  Gallery,
  OfferDescription,
  OfferDetailsList,
  OfferTitle,
  StyledContentWrapper,
} from 'assets/styles/pages/rejs.styles.ts';
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { ContactDetails } from 'components/ContactDetails/ContactDetails';

interface RejsTemplateProps {
  data: {
    rejs: {
      tytul: string;
      miejsce: string;
      dataRejsu: string;
      koszt: string;
      kontakt: string;
      opis: string;
      galeria: Array<{
        url: string;
      }>;
    };
  };
}

const galleryOptions = {
  showStatus: false,
  showThumbs: false,
  infiniteLoop: true,
};

const RejsTemplate: React.FC<RejsTemplateProps> = ({ data: { rejs } }) => (
  <StyledContentWrapper>
    <OfferTitle>
      <Place>{rejs.miejsce}</Place>
      <HighlightedHeading>{rejs.tytul}</HighlightedHeading>
    </OfferTitle>
    <Gallery>
      <Carousel {...galleryOptions}>
        {rejs.galeria.map((item) => (
          <img src={item.url} key={item.url} alt="#" />
        ))}
      </Carousel>
    </Gallery>
    <OfferDescription>{rejs.opis}</OfferDescription>
    <OfferDetailsList>
      <li>
        <div>
          <p>Data rejsu:</p>
          <p>{rejs.dataRejsu}</p>
        </div>
      </li>
      <li>
        <div>
          <p>Koszt:</p>
          <p>{rejs.koszt}</p>
        </div>
      </li>
    </OfferDetailsList>
    <ContactDetails />
  </StyledContentWrapper>
);

export const query = graphql`
  query ($id: String) {
    rejs: allDatoCmsTurystycznepodstrona(id: { eq: $id }) {
      tytul
      miejsce
      dataRejsu
      koszt
      opis
      galeria {
        url
      }
    }
  }
`;

export default RejsTemplate;
