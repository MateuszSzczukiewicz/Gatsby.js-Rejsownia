import React, { FC } from 'react';
import { graphql } from 'gatsby';
import {
  Gallery,
  OfferDescription,
  OfferDetailsList,
  OfferTitle,
  StyledContentWrapper,
  StyledHeading,
  StyledImage,
} from 'assets/styles/pages/rejs.styles.ts';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { ContactDetails } from 'components/ContactDetails/ContactDetails';
import { CruiseTemplateProps } from '../types/cruiseTemplate.type.ts';
import { SingleCruiseType } from '../types/singleCruise.type.ts';

const RejsTemplate: FC<CruiseTemplateProps> = ({ data }) => {
  const galleryOptions = {
    showStatus: false,
    showThumbs: false,
    infiniteLoop: true,
  };

  const cruise = data.cruise;

  return (
    <StyledContentWrapper>
      <OfferTitle>
        <StyledHeading>{cruise.title}</StyledHeading>
      </OfferTitle>
      <Gallery>
        <Carousel {...galleryOptions}>
          {cruise.gallery.map((item) => (
            <StyledImage src={item.url} key={item.url} alt="" />
          ))}
        </Carousel>
      </Gallery>
      <OfferDescription dangerouslySetInnerHTML={{ __html: cruise.descriptionNode.childMarkdownRemark.html }} />
      <OfferDetailsList>
        <li>
          <div>
            <p>Miejsce:</p>
            <p>{cruise.place}</p>
          </div>
        </li>
        <li>
          <div>
            <p>Data rejsu:</p>
            <p>{cruise.date}</p>
          </div>
        </li>
        <li>
          <div>
            <p>Koszt:</p>
            <p>{cruise.cost}</p>
          </div>
        </li>
      </OfferDetailsList>
      <ContactDetails />
    </StyledContentWrapper>
  );
};

export const query = graphql`
  query SubPageQuery($id: String) {
    cruise: datoCmsCruise(id: { eq: $id }) {
      title
      place
      date
      cost
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      gallery {
        url
      }
    }
  }
`;

export default RejsTemplate;

export const Head: FC<CruiseTemplateProps> = ({ data }) => {
  const cruise: SingleCruiseType = data.cruise;
  return (
    <title>
      {cruise.place} {cruise.date}
    </title>
  );
};
