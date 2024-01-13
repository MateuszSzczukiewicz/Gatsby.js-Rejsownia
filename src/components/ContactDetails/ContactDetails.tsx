import React, { FC } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { ContactDetailsWrapper } from './ContactDetails.styles';
import { HeroQueryType } from '../../types/heroQuery.type.ts';

export const ContactDetails: FC = () => {
  const data: HeroQueryType = useStaticQuery(graphql`
    query {
      hero: file(relativePath: { regex: "/kontakt/0_hero.webp/" }) {
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
        <p>l.a.yachtingltd@gmail.com</p>
        <p>+48 668 890 650</p>
      </div>
    </ContactDetailsWrapper>
  );
};
