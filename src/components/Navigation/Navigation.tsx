import React, { useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { FacebookIcon } from 'assets/icons/FacebookIcon';
import { InstagramIcon } from 'assets/icons/InstagramIcon';
import {
  OuterWrapper,
  StyledBurger,
  StyledLogo,
  StyledNavigation,
  StyledSocialIcon,
  Wrapper,
} from './Navigation.styles.ts';

interface NavigationQuery {
  logo: {
    publicURL: string;
  };
}

export const Navigation: React.FC = () => {
  const data = useStaticQuery<NavigationQuery>(graphql`
    query {
      logo: file(relativePath: { regex: "/navigation/logo.jpg/" }) {
        publicURL
      }
    }
  `);

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <OuterWrapper>
      <StyledLogo to="/" imageSource={data.logo.publicURL} isMobile />
      <StyledBurger onClick={toggleNavigation}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Wrapper isOpen={isOpen}>
        <StyledLogo onClick={toggleNavigation} to="/" imageSource={data.logo.publicURL} />
        <StyledNavigation>
          <ul>
            <li>
              <Link onClick={toggleNavigation} to="/rejsy">
                Rejsy turystyczne
              </Link>
            </li>
            <li>
              <Link onClick={toggleNavigation} to="/staze">
                Staże i szkolenia
              </Link>
            </li>
            <li>
              <Link onClick={toggleNavigation} to="/czarter">
                Czarter jachtów
              </Link>
            </li>
            <li>
              <Link onClick={toggleNavigation} to="/kontakt">
                Kontakt
              </Link>
            </li>
          </ul>
        </StyledNavigation>
        <div>
          <StyledSocialIcon as="a" href="https://www.facebook.com/layachting" target="_blank">
            <FacebookIcon />
          </StyledSocialIcon>
          <StyledSocialIcon as="a" href="https://www.instagram.com/layachting/" target="_blank">
            <InstagramIcon />
          </StyledSocialIcon>
        </div>
      </Wrapper>
    </OuterWrapper>
  );
};
