import React, { useEffect, useRef } from 'react';
import { useStaticQuery, graphql, Link, PageProps, HeadFC } from 'gatsby';
import { ContentWrapper } from '../components/ContentWrapper/ContentWrapper.styles';
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
  StyledOffer,
  ShowcaseImage,
  ShowcaseGallery,
  StyledLinkButton,
  ServicesSection,
  StyledHeading,
} from 'assets/styles/pages/homepage.styles.ts';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Homepage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query Homepage {
      hero: file(relativePath: { regex: "/homepage/0_hero.webp/" }) {
        publicURL
      }
      welcome: file(relativePath: { regex: "/homepage/1_welcome.webp/" }) {
        publicURL
      }
      grid1: file(relativePath: { regex: "/homepage/2_grid.webp/" }) {
        publicURL
      }
      grid2: file(relativePath: { regex: "/homepage/3_grid.webp/" }) {
        publicURL
      }
      grid3: file(relativePath: { regex: "/homepage/4_grid.webp/" }) {
        publicURL
      }
      grid4: file(relativePath: { regex: "/homepage/5_grid.webp/" }) {
        publicURL
      }
    }
  `);
  const heroHeading = useRef(null);
  const welcome = useRef(null);
  const offers = useRef(null);
  const showcase = useRef(null);
  const services = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroHeading.current,
      { x: '-=150%', autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        ease: 'power3',
        stagger: 0.1,
        scrollTrigger: {
          trigger: heroHeading.current,
          start: 'top bottom',
        },
      },
    );
    gsap.fromTo(
      welcome.current,
      { autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: welcome.current,
          start: 'top bottom',
        },
      },
    );
    gsap.fromTo(
      offers.current,
      { autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: offers.current,
          start: 'top bottom',
        },
      },
    );
    gsap.fromTo(
      showcase.current,
      { autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: showcase.current,
          start: 'top bottom',
        },
      },
    );
    gsap.fromTo(
      services.current,
      { autoAlpha: 0 },
      {
        x: 0,
        autoAlpha: 1,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: services.current,
          start: 'top bottom',
        },
      },
    );
  }, []);

  return (
    <ContentWrapper>
      <Hero>
        <HeroHeading ref={heroHeading}>
          <h1>Twoja Przygoda na Falach Rozpoczyna Się Tutaj!</h1>
        </HeroHeading>
        <HeroImage imageSource={data.hero.publicURL} />
      </Hero>
      <WelcomeSection ref={welcome}>
        <WelcomeSectionContent>
          <h2>Witaj na Pokładzie L.A Yachting</h2>
          <p>
            Przygotuj się na niezapomniane przygody na falach z L.A. Yachting. Z ponad trzydziestoletnim doświadczeniem, zapewniamy doskonale
            zorganizowane rejsy, unikalną żeglarską atmosferę oraz atrakcje zarówno na morzu, jak i na lądzie. Wszystko to pod czujnym okiem
            doświadczonego mistrza żeglugi - Andrzeja Latuska, który wprowadzi Cię w świat morskich wyzwań i przygód.
          </p>
          <p>
            Andrzej Latusek to żeglarz z trzydziestoletnim stażem, odpowiedzialny za nasze niezapomniane rejsy. Jego pasja i doświadczenie sprawiają,
            że każda chwila na pokładzie jest nie tylko bezpieczna, ale także inspirująca. Nasze wyprawy prowadzą przez malownicze tereny, takie jak
            urokliwa Grecja, egzotyczna Teneryfa, urocza Chorwacja czy rajskie Karaiby. To więcej niż tylko podróż – to wyjątkowe doświadczenie, które
            połączy Cię z pięknem natury i sztuką żeglowania.
          </p>
        </WelcomeSectionContent>
        <WelcomeSectionImage imageSource={data.welcome.publicURL} />
      </WelcomeSection>
      <OffersSection ref={offers}>
        <StyledHeading>Odkryj Świat Naszych Rejsów!</StyledHeading>
        <StyledList>
          <li>
            <StyledTitle to="/rejsy">Rejsy turystyczne</StyledTitle>
            <p>
              Zapraszamy Cię do naszej morskiej odysei! Nasze rejsy turystyczne to prawdziwe doświadczenie żeglowania, oparte na aktywnym
              uczestnictwie w załodze. Niezależnie od Twojego poziomu doświadczenia, zapewniamy Ci wyjątkową okazję do zdobycia morskich umiejętności,
              pod okiem naszych ekspertów, podczas niezapomnianych przygód na wodach. Dołącz i poczuj ducha żeglarstwa razem z nami!
            </p>
          </li>
          <li>
            <StyledTitle to="/staze">Staże i szkolenia</StyledTitle>
            <p>
              Witaj na pokładzie naszych ekscytujących rejsów szkoleniowych! Oferujemy niepowtarzalne doświadczenia żeglowania, gdzie aktywne
              uczestnictwo w załodze to klucz do nabywania morskich umiejętności, niezależnie od Twojego poziomu. Możesz u nas zdobyć patent sternika,
              stawiając czoła wyzwaniom morskim. Dołącz do nas, by razem odkrywać fascynujący świat żeglarstwa i zdobywać wiedzę, która doprowadzi cię
              do nieodkrytych dotąd możliwości!
            </p>
          </li>
          <li>
            <StyledTitle to="/czarter">Czarter yachtów</StyledTitle>
            <p>
              Oferujemy Ci także niezapomniany czarter łodzi, gdzie marzenia stają się rzeczywistością! Nasza wyjątkowa oferta to mistrzowskie
              dopasowanie rejsu do Twoich osobistych pragnień. Niezależnie od daty, lokalizacji czy liczby uczestników – naszą misją jest spełnienie
              każdego Twojego oczekiwania. Poznaj nieodkryte jeszcze zakątki światowych mórz i zanurz się w najpiękniejszych przygodach, jakie życie
              na wodzie może Ci zaoferować!
            </p>
          </li>
        </StyledList>
      </OffersSection>
      <ShowcaseSection ref={showcase}>
        <h2>Oferta rejsów</h2>
        <div>
          <StyledOffer>Grecja</StyledOffer>
          <StyledOffer>Sycylia</StyledOffer>
          <StyledOffer>Wyspy Kanaryskie</StyledOffer>
          <StyledOffer>Karaiby</StyledOffer>
          <StyledOffer>Norwegia</StyledOffer>
        </div>
        <ShowcaseGallery>
          <ShowcaseImage src={data.grid1.publicURL} alt="#" />
          <ShowcaseImage src={data.grid2.publicURL} alt="#" />
          <ShowcaseImage src={data.grid3.publicURL} alt="#" />
          <ShowcaseImage src={data.grid4.publicURL} alt="#" />
        </ShowcaseGallery>
      </ShowcaseSection>
      <ServicesSection ref={services}>
        <div>
          <StyledHeading>Zrealizuj swoje marzenia!</StyledHeading>
          <StyledLinkButton as={Link} to="/kontakt">
            Skontaktuj się z nami!
          </StyledLinkButton>
        </div>
        <p>
          L.A. Yachting – Twoja droga do niezapomnianych chwil na falach, do spotkań z naturą w jej najczystszej formie i tworzenia relacji na całe
          lata. Przygotuj się na wyjątkowe przygody, nowe przyjaźnie i niesamowite wspomnienia. Razem z nami żeglowanie nabiera nowego znaczenia –
          staje się pasją, stylem życia i sposobem na odkrywanie świata w sposób, o jakim marzyłeś. Dołącz do Nas i odkryj, jak piękny może być świat
          na morzu.
        </p>
      </ServicesSection>
    </ContentWrapper>
  );
};

export default Homepage;

export const Head: HeadFC = () => <title>Strona główna</title>;
