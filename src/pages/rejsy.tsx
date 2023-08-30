import React from 'react';
import { graphql } from 'gatsby';
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';
import { ContentWrapper } from 'components/ContentWrapper/ContentWrapper.styles';
import { EmptyState, Gallery, IntroSection } from 'assets/styles/pages/rejsy.styles.ts';
import { Thumbnail } from 'components/Thumbnail/Thumbnail';

interface Cruise {
  id: string;
  istraining: boolean;
  place: string;
  date: string;
  gallery: {
    url: string;
  }[];
}

interface PageProps {
  data: {
    cruises: {
      nodes: Cruise[];
    };
  };
}

export const Turystyczne: React.FC<PageProps> = ({ data }) => {
  const cruises = data.cruises.nodes.filter((cruise) => !cruise.istraining);

  return (
    <ContentWrapper>
      <IntroSection>
        <HighlightedHeading>Nasza oferta rejsów turystycznych</HighlightedHeading>
        <p>
          Bezustannie przeszukujemy bogatą gamę rejsów turystycznych, gotowych zaspokoić każde gusta
          podróżników. Wybierz rodzaj rejsu, który wzbudza Twoje zainteresowanie.
        </p>
      </IntroSection>
      {cruises.length ? (
        <Gallery>
          {cruises.map((cruise) => (
            <Thumbnail
              key={cruise.id}
              imageSource={cruise.gallery[0].url}
              place={cruise.place}
              date={cruise.date}
            />
          ))}
        </Gallery>
      ) : (
        <EmptyState>
          <h2>Brak rejsów turystycznych</h2>
          <h3>Już niebawem nowe rejsy turystyczne od L.A. Yachting</h3>
        </EmptyState>
      )}
    </ContentWrapper>
  );
};

export const query = graphql`
  query CruiseQuery {
    cruises: allDatoCmsCruise {
      nodes {
        id
        istraining
        place
        date
        gallery {
          url
        }
      }
    }
  }
`;

export default Turystyczne;
