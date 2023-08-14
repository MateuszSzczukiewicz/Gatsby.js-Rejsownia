import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper.styles';
import { HighlightedHeading } from '../components/HighlightedHeading/HighlightedHeading';
import { StyledList } from '../components/StyledList/StyledList.styles';
import {
  Hero,
  HeroImage,
  HeroHeading,
  WelcomeSection,
  WelcomeSectionImage,
  WelcomeSectionContent,
  OffersSection,
  StyledTitle,
  ShowcaseSection,
  StyledButton,
  ShowcaseImage,
  ShowcaseGallery,
  StyledLinkButton,
  ServicesSection,
} from 'assets/styles/pages/homepage.styles.ts';

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
      <WelcomeSectionImage imageSource={data.welcome.publicURL} />
    </WelcomeSection>
    <OffersSection>
      <HighlightedHeading width="50" isRight>
        Odkryj Świat Naszych Rejsów!
      </HighlightedHeading>
      <StyledList>
        <li>
          <StyledTitle to="/rejsy">Rejsy turystyczne</StyledTitle>
          <p>
            Zapraszamy Cię do naszej morskiej odysei! Nasze rejsy turystyczne to prawdziwe
            doświadczenie żeglowania, oparte na aktywnym uczestnictwie w załodze. Niezależnie od
            Twojego poziomu doświadczenia, zapewniamy Ci wyjątkową okazję do zdobycia morskich
            umiejętności, pod okiem naszych ekspertów, podczas niezapomnianych przygód na wodach.
            Dołącz i poczuj ducha żeglarstwa razem z nami!
          </p>
        </li>
        <li>
          <StyledTitle to="/staze">Staże i szkolenia</StyledTitle>
          <p>
            Witaj na pokładzie naszych ekscytujących rejsów szkoleniowych! Oferujemy niepowtarzalne
            doświadczenia żeglowania, gdzie aktywne uczestnictwo w załodze to klucz do nabywania
            morskich umiejętności, niezależnie od Twojego poziomu. Możesz u nas zdobyć patent
            sternika, stawiając czoła wyzwaniom morskim. Dołącz do nas, by razem odkrywać
            fascynujący świat żeglarstwa i zdobywać wiedzę, która doprowadzi cię do nieodkrytych
            dotąd możliwości!
          </p>
        </li>
        <li>
          <StyledTitle to="/czarter">Czarter yachtów</StyledTitle>
          <p>
            Oferujemy Ci także niezapomniany czarter łodzi, gdzie marzenia stają się
            rzeczywistością! Nasza wyjątkowa oferta to mistrzowskie dopasowanie rejsu do Twoich
            osobistych pragnień. Niezależnie od daty, lokalizacji czy liczby uczestników – naszą
            misją jest spełnienie każdego Twojego oczekiwania. Poznaj nieodkryte jeszcze zakątki
            światowych mórz i zanurz się w najpiękniejszych przygodach, jakie życie na wodzie może
            Ci zaoferować!
          </p>
        </li>
      </StyledList>
    </OffersSection>
    <ShowcaseSection>
      <h2>Oferta rejsów</h2>
      <div>
        <StyledButton as={Link} to="/rejsy" isCentered>
          Grecja
        </StyledButton>
        <StyledButton as={Link} to="/rejsy" isCentered>
          Sycylia
        </StyledButton>
        <StyledButton as={Link} to="/rejsy" isCentered>
          Wyspy Kanaryskie
        </StyledButton>
        <StyledButton as={Link} to="/rejsy" isCentered>
          Karaiby
        </StyledButton>
        <StyledButton as={Link} to="/rejsy" isCentered>
          Norwegia
        </StyledButton>
      </div>
      <ShowcaseGallery>
        <ShowcaseImage src={data.grid1.publicURL} alt="#" />
        <ShowcaseImage isBig src={data.grid2.publicURL} alt="#" />
        <ShowcaseImage src={data.grid3.publicURL} alt="#" />
        <ShowcaseImage isBig src={data.grid4.publicURL} alt="#" />
      </ShowcaseGallery>
    </ShowcaseSection>
    <ServicesSection>
      <div>
        <HighlightedHeading width="55">Zrealizuj swoje marzenia!</HighlightedHeading>
        <StyledLinkButton as={Link} to="/kontakt">
          Skontaktuj się z nami!
        </StyledLinkButton>
      </div>
      <p>
        L.A. Yachting – Twoja droga do niezapomnianych chwil na falach, do spotkań z naturą w jej
        najczystszej formie i tworzenia relacji na całe lata. Przygotuj się na wyjątkowe przygody,
        nowe przyjaźnie i niesamowite wspomnienia. Razem z nami żeglowanie nabiera nowego znaczenia
        – staje się pasją, stylem życia i sposobem na odkrywanie świata w sposób, o jakim marzyłeś.
        Dołącz do Nas i odkryj, jak piękny może być świat na morzu.
      </p>
    </ServicesSection>
  </ContentWrapper>
);

export const query = graphql`
  query Homepage {
    hero: file(relativePath: { regex: "/homepage/0_hero.jpg/" }) {
      publicURL
    }
    welcome: file(relativePath: { regex: "/homepage/1_welcome.jpg/" }) {
      publicURL
    }
    grid1: file(relativePath: { regex: "/homepage/2_grid.jpg/" }) {
      publicURL
    }
    grid2: file(relativePath: { regex: "/homepage/3_grid.jpg/" }) {
      publicURL
    }
    grid3: file(relativePath: { regex: "/homepage/4_grid.jpg/" }) {
      publicURL
    }
    grid4: file(relativePath: { regex: "/homepage/5_grid.jpg/" }) {
      publicURL
    }
  }
`;

export default Homepage;
