import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FacebookIcon } from 'assets/icons-components/FacebookIcon';
import { InstagramIcon } from 'assets/icons-components/InstagramIcon';
import {
  OuterWrapper,
  StyledBurger,
  StyledLogo,
  StyledNavigation,
  StyledSocialIcon,
  Wrapper,
} from './Navigation.styles.tsx';

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <OuterWrapper>
      <Link to="/">{/*<StyledLogo isMobile isSmall />*/}</Link>
      <StyledBurger onClick={toggleNavigation}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <Wrapper isOpen={isOpen}>
        <Link to="/">
          <StyledLogo />
        </Link>
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
