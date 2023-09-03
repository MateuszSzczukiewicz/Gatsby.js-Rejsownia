import React from 'react';
import { useStaticQuery, graphql, PageProps } from 'gatsby';
import { ContactContentWrapper, ContactInfoWrapper, ContactPhoto, StyledHeading } from 'assets/styles/pages/kontakt.styles';
import { PhoneIcon } from 'assets/icons/PhoneIcon';
import { EmailIcon } from 'assets/icons/EmailIcon.tsx';
import { ContactForm } from 'components/ContactForm/ContactForm';

export const Kontakt: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { regex: "/kontakt/0_hero.jpg/" }) {
        publicURL
      }
    }
  `);

  return (
    <ContactContentWrapper>
      <ContactInfoWrapper>
        <StyledHeading>Kontakt</StyledHeading>
        <p>
          Interesują Cię niezapomniane rejsy turystyczne, staże czy rejsy szkoleniowe? Jesteśmy tu, aby Ci pomóc! Niezależnie od tego, czy marzysz o
          odkrywaniu nowych miejsc podczas relaksującego rejsu, czy też szukasz możliwości stażu lub szkolenia na wodach, jesteśmy gotowi odpowiedzieć
          na Twoje pytania.
        </p>
        <address>
          <a href="mailto:l.a.yachtingltd@gmail.com">
            <EmailIcon />
            l.a.yachtingltd@gmail.com
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
};

export default Kontakt;
