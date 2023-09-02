import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ContactDetailsWrapper } from './ContactDetails.styles';

interface HeroQuery {
  hero: {
    publicURL: string;
  };
}

export const ContactDetails: React.FC = () => {
  const data: HeroQuery = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { regex: "/kontakt/0_hero.jpg/" }) {
        publicURL
      }
    }
  `);

  return (
    <ContactDetailsWrapper to="/kontakt">
      <img src={data.hero.publicURL} alt="Andrzej Latusek" />
      <div>
        <p>Kontakt:</p>
        <p>Andrzej Latusek</p>
        <p>andylatusek@gmail.com</p>
        <p>+48 668 890 650</p>
      </div>
    </ContactDetailsWrapper>
  );
};
