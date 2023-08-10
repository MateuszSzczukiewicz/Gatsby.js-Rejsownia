import React, { useState } from 'react';
import { Link } from 'gatsby';
import { FacebookIcon } from 'assets/icons-components/FacebookIcon.tsx';
import { InstagramIcon } from 'assets/icons-components/InstagramIcon.tsx';
import {
  OuterWrapper,
  StyledBurger,
  StyledLogo,
  StyledNavigation,
  StyledSocialIcon,
  Wrapper,
} from './Navigation.styles';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavigation = () => {
    setIsOpen(!isOpen);
  };

  return (
    <OuterWrapper>
      <Link to="/">
        <StyledLogo isSmall isMobile />
      </Link>
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
              <Link onClick={toggleNavigation} to="/"></Link>
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

export default Navigation;
