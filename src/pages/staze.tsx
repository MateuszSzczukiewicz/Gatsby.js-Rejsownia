import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';
import { ContentWrapper } from 'components/ContentWrapper/ContentWrapper.styles';
import { EmptyState, Gallery, IntroSection } from 'assets/styles/pages/rejsy.styles.ts';
import { Thumbnail } from 'components/Thumbnail/Thumbnail';

interface QueryResult {
  cruises: {
    nodes: {
      id: string;
      istraining: boolean;
      place: string;
      date: string;
      gallery: {
        url: string;
      }[];
    }[];
  };
}

const Staze: React.FC = () => {
  const data: QueryResult = useStaticQuery(graphql`
    query {
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
  `);

  const cruises = data.cruises.nodes.filter((cruise) => cruise.istraining);

  return (
    <ContentWrapper>
      <IntroSection>
        <HighlightedHeading>Nasza oferta stażów oraz rejsów szkoleniowych</HighlightedHeading>
        <p>
          Bezustannie przeszukujemy bogatą gamę stażów oraz rejsów szkoleniowych, gotowych zaspokoić
          każde gusta podróżników. Wybierz rodzaj rejsu, który wzbudza Twoje zainteresowanie.
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
          <h2>Brak stażów i rejsów szkoleniowych</h2>
          <h3>Już niebawem nowe staże i rejsy szkoleniowe od L.A. Yachting</h3>
        </EmptyState>
      )}
    </ContentWrapper>
  );
};

export default Staze;
