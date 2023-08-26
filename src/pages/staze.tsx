import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';
import { ContentWrapper } from 'components/ContentWrapper/ContentWrapper.styles';
import { EmptyState, Gallery, IntroSection } from 'assets/styles/pages/rejsy.styles.ts';
import { Thumbnail } from 'components/Thumbnail/Thumbnail';

interface QueryResult {
  staze: {
    nodes: {
      id: string;
      isstaz: boolean;
      data: string;
      miejsce: string;
      zdjecie: {
        url: string;
      };
    }[];
  };
}

const Staze: React.FC = () => {
  const data: QueryResult = useStaticQuery(graphql`
    query {
      staze: allDatoCmsKafelek {
        nodes {
          id
          isstaz
          data
          miejsce
          zdjecie {
            url
          }
        }
      }
    }
  `);

  const staze = data.staze.nodes.filter((rejs) => rejs.isstaz);

  return (
    <ContentWrapper>
      <IntroSection>
        <HighlightedHeading>Nasza oferta stażów oraz rejsów szkoleniowych</HighlightedHeading>
        <p>
          Bezustannie przeszukujemy bogatą gamę stażów oraz rejsów szkoleniowych, gotowych zaspokoić
          każde gusta podróżników. Wybierz rodzaj rejsu, który wzbudza Twoje zainteresowanie.
        </p>
      </IntroSection>
      {staze.length ? (
        <Gallery>
          {staze.map((staz) => (
            <Thumbnail
              key={staz.id}
              imageSource={staz.zdjecie.url}
              miejsce={staz.miejsce}
              data={staz.data}
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
