import styled from 'styled-components';
import { StyledIcon } from 'components/StyledIcon/StyledIcon.tsx';
import { Link } from 'gatsby';

export const StyledFooter = styled.footer`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: 1fr 1fr;
  padding: 50px 20px;

  div:first-of-type {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    grid-column: 1 / 3;

    a {
      color: ${({ theme }) => theme.color.black};
      text-decoration: none;
      margin: 10px 0;
    }
  }

  div:last-of-type {
    grid-row: 1 / 2;
    margin-left: auto;

    a {
      margin-right: 20px;
      width: 35px;
      height: 35px;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    padding: 100px 100px 60px;

    div:first-of-type {
      width: 60%;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export const StyledHeading = styled(Link)`
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-weight: 600;
  grid-row: 1 / 2;
  margin: 0;
  align-self: center;
  cursor: pointer;
  text-decoration: none;
  color: black;
`;

export const StyledFooterIcon = styled(StyledIcon)`
  display: inline-block;

  svg {
    width: 100%;
    height: auto;
  }
`;
