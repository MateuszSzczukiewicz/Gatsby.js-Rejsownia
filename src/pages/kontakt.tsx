import React from 'react';
import { graphql, PageProps } from 'gatsby';
import {
  ContactContentWrapper,
  ContactInfoWrapper,
  ContactPhoto,
} from 'assets/styles/pages/kontakt.styles';
import { HighlightedHeading } from 'components/HighlightedHeading/HighlightedHeading';
import { PhoneIcon } from 'assets/icons/PhoneIcon';
import { EmailIcon } from 'assets/icons/EmailIcon.tsx';
import { ContactForm } from 'components/ContactForm/ContactForm';

interface HeroQuery {
  hero: {
    publicURL: string;
  };
}

const Kontakt: React.FC<PageProps<HeroQuery>> = ({ data }) => (
  <ContactContentWrapper>
    <ContactInfoWrapper>
      <HighlightedHeading>Kontakt</HighlightedHeading>
      <p>
        Interesują Cię niezapomniane rejsy turystyczne, staże czy rejsy szkoleniowe? Jesteśmy tu,
        aby Ci pomóc! Niezależnie od tego, czy marzysz o odkrywaniu nowych miejsc podczas
        relaksującego rejsu, czy też szukasz możliwości stażu lub szkolenia na wodach, jesteśmy
        gotowi odpowiedzieć na Twoje pytania.
      </p>
      <address>
        <a href="mailto:andylatusek@gmail.com">
          <EmailIcon />
          andylatusek@gmail.com
        </a>
      </address>
      <a href="tel:+48668890650">
        <PhoneIcon />
        +48 668 890 650
      </a>
    </ContactInfoWrapper>
    <ContactForm />
    <ContactPhoto imageSource={data.hero.publicURL} />
  </ContactContentWrapper>
);

export const query = graphql`
  query {
    hero: file(relativePath: { regex: "/kontakt/0_hero.jpg/" }) {
      publicURL
    }
  }
`;

export default Kontakt;
