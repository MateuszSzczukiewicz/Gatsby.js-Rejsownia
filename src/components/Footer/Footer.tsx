import React from 'react';
import { Link } from 'gatsby';
import { FacebookIcon } from 'assets/icons/FacebookIcon';
import { InstagramIcon } from 'assets/icons/InstagramIcon';
import { StyledFooter, StyledFooterIcon, StyledHeading } from './Footer.styles';

export const Footer: React.FC = () => (
  <StyledFooter>
    <StyledHeading to="/">L.A. Yachting</StyledHeading>
    <div>
      <Link to="/rejsy">Rejsy turystyczne</Link>
      <Link to="/staze">Staże i szkolenia</Link>
      <Link to="/czarter">Czarter jachtów</Link>
      <Link to="/kontakt">Kontakt</Link>
    </div>
    <div>
      <StyledFooterIcon as="a" href="https://www.facebook.com/layachting" target="_blank">
        <FacebookIcon />
      </StyledFooterIcon>
      <StyledFooterIcon as="a" href="https://www.instagram.com/layachting/" target="_blank">
        <InstagramIcon />
      </StyledFooterIcon>
    </div>
  </StyledFooter>
);
