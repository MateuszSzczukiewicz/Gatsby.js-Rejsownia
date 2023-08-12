import React from 'react';
import { ContentWrapper } from 'components/ContentWrapper/ContentWrapper.styles';
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading.tsx';
import { StyledList } from 'components/StyledList/StyledList.styles';
import { graphql, PageProps } from 'gatsby';
import {
  Hero,
  HeroImage,
  HeroHeading,
  WelcomeSection,
  WelcomeSectionImage,
  WelcomeSectionContent,
  OffersSection,
} from 'assets/styles/pages/homepage.styles';

interface ImageData {
  publicURL: string;
}

interface PageData<T> {
  [key: string]: T;
}

const Homepage: React.FC<PageProps<PageData<ImageData>>> = ({ data }) => (
  <ContentWrapper>
    <Hero>
      <HeroHeading>
        <h1>Twoja Przygoda na Falach Rozpoczyna Się Tutaj!</h1>
      </HeroHeading>
      <HeroImage imageSource={data.hero.publicURL} />
    </Hero>
    <WelcomeSection>
      <WelcomeSectionContent>
        <h2>Witaj na Pokładzie L.A Yachting</h2>
        <p>
          Przygotuj się na niezapomniane przygody na falach z L.A. Yachting. Z ponad
          trzydziestoletnim doświadczeniem, zapewniamy doskonale zorganizowane rejsy, unikalną
          żeglarską atmosferę oraz atrakcje zarówno na morzu, jak i na lądzie. Wszystko to pod
          czujnym okiem doświadczonego mistrza żeglugi - Andrzeja Latuska, który wprowadzi Cię w
          świat morskich wyzwań i przygód.
        </p>
        <p>
          Andrzej Latusek to żeglarz z trzydziestoletnim stażem, odpowiedzialny za nasze
          niezapomniane rejsy. Jego pasja i doświadczenie sprawiają, że każda chwila na pokładzie
          jest nie tylko bezpieczna, ale także inspirująca. Nasze wyprawy prowadzą przez malownicze
          tereny, takie jak urokliwa Grecja, egzotyczna Teneryfa, urocza Chorwacja czy rajskie
          Karaiby. To więcej niż tylko podróż – to wyjątkowe doświadczenie, które połączy Cię z
          pięknem natury i sztuką żeglowania.
        </p>
      </WelcomeSectionContent>
      <WelcomeSectionImage imageSource={data.hero.publicURL} />
    </WelcomeSection>
    <OffersSection>
      <HighlightedHeading width="50" isRight>
        Dlaczego szukasz właśnie nas?
      </HighlightedHeading>
      <StyledList>
        <li>
          <h3>Rejsy turystyczne</h3>
          <p>
            Organizujemy regularne rejsy turystyczne. Zapraszamy zarówno wilków morskich jak i tych,
            którzy pierwszy raz chcą spróbować swoich sił na morzu!
          </p>
        </li>
        <li>
          <h3>Staże i szkolenia</h3>
          <p>
            Prowadzimy kursy i i rejsy szkoleniowe na patenty morskie i śródlądowe umożliwiające
            zdobycie patentów żeglarskich i motorowodnych zakończone egzaminem państwowym
            certyfikowanym przez PZŻ.
          </p>
        </li>
        <li>
          <h3>Czarter jachtów</h3>
          <p>
            Dzięki ofercie czarterowej umożliwiamy żeglowanie w najatrakcyjniejszych miejscach na
            całym świecie – od malowniczego wybrzeża Chorwacji, Grecji aż po Karaiby, czy rajskie
            wyspy na Seszelach i w Tajlandii.
          </p>
        </li>
      </StyledList>
    </OffersSection>
  </ContentWrapper>
);

export const query = graphql`
  query Homepage {
    hero: file(relativePath: { regex: "/homepage/0_hero.jpg/" }) {
      publicURL
    }
  }
`;

export default Homepage;
