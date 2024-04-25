import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FacebookIcon } from 'assets/icons/FacebookIcon';
import { InstagramIcon } from 'assets/icons/InstagramIcon';
import { OuterWrapper, StyledBurger, StyledButton, StyledLogo, StyledNavigation, StyledSocialIcon, Wrapper } from './Navigation.styles.ts';
import { NavigationQueryType } from '../../types/navigationQuery.type.ts';
import { useBodyOverflow } from '../../hooks/useBodyOverflow.ts';
import { useToggle } from '../../hooks/useToggle.ts';

export const Navigation = () => {
  const data = useStaticQuery<NavigationQueryType>(graphql`
    query {
      logo: file(relativePath: { regex: "/navigation/logo.webp/" }) {
        publicURL
      }
    }
  `);

  const [isOpen, toggleNavigation] = useToggle();

  useBodyOverflow(isOpen);

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
          <StyledSocialIcon as="a" href="https://www.facebook.com/rejsownia" target="_blank">
            <FacebookIcon />
          </StyledSocialIcon>
          <StyledSocialIcon as="a" href="https://www.instagram.com/rejsownia" target="_blank">
            <InstagramIcon />
          </StyledSocialIcon>
        </div>
      </Wrapper>
    </OuterWrapper>
  );
};
