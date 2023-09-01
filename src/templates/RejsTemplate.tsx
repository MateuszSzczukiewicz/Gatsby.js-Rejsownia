import React from 'react';
import { graphql } from 'gatsby';
import {
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

interface Cruise {
  title: string;
  place: string;
  date: string;
  cost: string;
  descriptionNode: {
    childMarkdownRemark: {
      html: string;
    };
  };
  gallery: {
    url: string;
  }[];
}

interface RejsTemplateProps {
  data: {
    cruise: Cruise;
  };
}

const galleryOptions = {
  showStatus: false,
  showThumbs: false,
  infiniteLoop: true,
};

const RejsTemplate: React.FC<RejsTemplateProps> = ({ data }) => {
  const cruise = data.cruise;

  return (
    <StyledContentWrapper>
      <OfferTitle>
        <HighlightedHeading>{cruise.title}</HighlightedHeading>
      </OfferTitle>
      <Gallery>
        <Carousel {...galleryOptions}>
          {cruise.gallery.map((item) => (
            <img src={item.url} key={item.url} alt="" />
          ))}
        </Carousel>
      </Gallery>
      <OfferDescription
        dangerouslySetInnerHTML={{ __html: cruise.descriptionNode.childMarkdownRemark.html }}
      />
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
