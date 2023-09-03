import React from 'react';
import { graphql } from 'gatsby';
import { ContentWrapper } from 'components/ContentWrapper/ContentWrapper.styles';
import { EmptyState, Gallery, IntroSection, StyledHeading } from 'assets/styles/pages/rejsy.styles.ts';
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

export const Staze: React.FC<PageProps> = ({ data }) => {
  const cruises = data.cruises.nodes.filter((cruise) => cruise.istraining);

  return (
    <ContentWrapper>
      <IntroSection>
        <StyledHeading>Nasza oferta stażów oraz rejsów szkoleniowych</StyledHeading>
        <p>
          Bezustannie przygotowujemy bogatą gamę stażów oraz rejsów szkoleniowych, gotowych zaspokoić każde gusta podróżników. Wybierz rejs, który
          wzbudza Twoje zainteresowanie.
        </p>
      </IntroSection>
      {cruises.length ? (
        <Gallery>
          {cruises.map((cruise) => (
            <Thumbnail key={cruise.id} imageSource={cruise.gallery[0].url} place={cruise.place} date={cruise.date} />
          ))}
        </Gallery>
      ) : (
        <EmptyState>
          <h2>Brak stażów i rejsów szkoleniowych</h2>
          <h3>Już niebawem nowe staże rejsy szkoleniowe od L.A. Yachting</h3>
        </EmptyState>
      )}
    </ContentWrapper>
  );
};

export const query = graphql`
  query TrainingQuery {
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

export default Staze;
