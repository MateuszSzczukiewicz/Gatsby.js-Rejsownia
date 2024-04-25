import React, { FC } from 'react';
import { useStaticQuery, graphql, PageProps, HeadFC } from 'gatsby';
import { ContactContentWrapper, ContactInfoWrapper, ContactPhoto, StyledHeading } from 'assets/styles/pages/kontakt.styles';
import { PhoneIcon } from 'assets/icons/PhoneIcon';
import { EmailIcon } from 'assets/icons/EmailIcon.tsx';
import { ContactForm } from 'components/ContactForm/ContactForm';

export const Contact: FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { regex: "/kontakt/0_hero.webp/" }) {
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
          <a href="mailto:rejsownia@gmail.com" target="_blank" rel="noreferrer">
            <EmailIcon />
            rejsownia@gmail.com
          </a>
        </address>
        <a href="tel:+48498301286">
          <PhoneIcon />
          +48 498 301 286
        </a>
      </ContactInfoWrapper>
      <ContactForm />
      <ContactPhoto imageSource={data.hero.publicURL} />
    </ContactContentWrapper>
  );
};

export default Contact;

export const Head: HeadFC = () => <title>Kontakt</title>;
