import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';
import { ContentWrapper } from 'components/ContentWrapper/ContentWrapper.styles';
import { EmptyState, Gallery, IntroSection } from 'assets/styles/pages/rejsy.styles.ts';
import { Thumbnail } from 'components/Thumbnail/Thumbnail';

interface QueryResult {
  rejsy: {
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

const Turystyczne: React.FC = () => {
  const data: QueryResult = useStaticQuery(graphql`
    query {
      rejsy: allDatoCmsKafelek {
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

  const rejsy = data.rejsy.nodes.filter((rejs) => !rejs.isstaz);

  return (
    <ContentWrapper>
      <IntroSection>
        <HighlightedHeading>Nasza oferta rejsów turystycznych</HighlightedHeading>
        <p>
          Bezustannie przeszukujemy bogatą gamę rejsów turystycznych, gotowych zaspokoić każde gusta
          podróżników. Wybierz rodzaj rejsu, który wzbudza Twoje zainteresowanie.
        </p>
      </IntroSection>
      {rejsy.length ? (
        <Gallery>
          {rejsy.map((rejs) => (
            <Thumbnail
              key={rejs.id}
              imageSource={rejs.zdjecie.url}
              miejsce={rejs.miejsce}
              data={rejs.data}
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

export default Turystyczne;
