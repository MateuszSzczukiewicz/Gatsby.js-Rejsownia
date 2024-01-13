import React, { FC } from 'react';
import { graphql, HeadFC } from 'gatsby';
import { ContentWrapper } from 'components/ContentWrapper/ContentWrapper.styles';
import { EmptyState, Gallery, IntroSection, StyledHeading } from 'assets/styles/pages/rejsy.styles.ts';
import { Thumbnail } from 'components/Thumbnail/Thumbnail';
import { PagePropsType } from '../types/pageProps.type.ts';

export const TouristCruises: FC<PagePropsType> = ({ data }) => {
  const cruises = data.cruises.nodes.filter((cruise) => !cruise.istraining);

  return (
    <ContentWrapper>
      <IntroSection>
        <StyledHeading>Nasza oferta rejsów turystycznych</StyledHeading>
        <p>
          Bezustannie przygotowujemy bogatą gamę rejsów turystycznych, gotowych zaspokoić każde gusta podróżników. Wybierz rejs, który wzbudza Twoje
          zainteresowanie.
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

export default TouristCruises;

export const Head: HeadFC = () => <title>Rejsy turystyczne</title>;
