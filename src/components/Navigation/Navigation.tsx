import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FacebookIcon } from 'assets/icons/FacebookIcon';
import { InstagramIcon } from 'assets/icons/InstagramIcon';
import { OuterWrapper, StyledBurger, StyledButton, StyledLogo, StyledNavigation, StyledSocialIcon, Wrapper } from './Navigation.styles.ts';

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
      <StyledBurger onClick={toggleNavigation} isOpen={isOpen}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Wrapper isOpen={isOpen}>
        <StyledLogo onClick={toggleNavigation} to="/" imageSource={data.logo.publicURL} />
        <StyledNavigation isOpen={isOpen}>
          <ul>
            <li>
              <StyledButton isOpen={isOpen} onClick={toggleNavigation} to="/rejsy">
                <span>Rejsy turystyczne</span>
              </StyledButton>
            </li>
            <li>
              <StyledButton isOpen={isOpen} onClick={toggleNavigation} to="/staze">
                <span>Staże i szkolenia</span>
              </StyledButton>
            </li>
            <li>
              <StyledButton isOpen={isOpen} onClick={toggleNavigation} to="/czarter">
                <span>Czarter jachtów</span>
              </StyledButton>
            </li>
            <li>
              <StyledButton isOpen={isOpen} onClick={toggleNavigation} to="/kontakt">
                <span>Kontakt</span>
              </StyledButton>
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
