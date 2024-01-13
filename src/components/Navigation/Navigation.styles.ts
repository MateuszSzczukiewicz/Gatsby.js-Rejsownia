import styled from 'styled-components';
import { StyledIcon } from '../StyledIcon/StyledIcon';
import { Link } from 'gatsby';
import { IsOpenPropsType } from '../../types/isOpenProps.type.ts';
import { StyledLogoPropsType } from '../../types/styledLogoProps.type.ts';

export const OuterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px;
  position: absolute;
  top: 0;
  z-index: 1000;
`;

export const StyledBurger = styled.label<IsOpenPropsType>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: ${({ isOpen }) => (isOpen ? 'fixed' : 'relative')};
  top: ${({ isOpen }) => (isOpen ? '46px' : '')};
  right: ${({ isOpen }) => (isOpen ? '29px' : '')};
  width: 18px;
  height: 18px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  -webkit-tap-highlight-color: transparent;

  div {
    width: 2rem;
    height: 2px;
    background-color: ${({ theme }) => theme.color.black};
  }

  div:first-child {
    position: ${({ isOpen }) => (isOpen ? 'absolute' : '')};
    top: ${({ isOpen }) => (isOpen ? '50%' : '')};
    left: ${({ isOpen }) => (isOpen ? '50%' : '')};
    transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg) translateY(0px)' : '')};
  }

  div:nth-child(2) {
    opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
  }

  div:last-child {
    position: ${({ isOpen }) => (isOpen ? 'absolute' : '')};
    top: ${({ isOpen }) => (isOpen ? '50%' : '')};
    left: ${({ isOpen }) => (isOpen ? '50%' : '')};
    transform: ${({ isOpen }) => (isOpen ? 'rotate(-45deg) translateY(0px)' : '')};
  }

  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`;

export const StyledButton = styled(Link)<IsOpenPropsType>`
  position: relative;
  overflow: hidden;

  span {
    position: relative;
    z-index: 2;
  }

  &::after {
    position: absolute;
    content: '';
    width: 250px;
    height: 250px;
    background-color: white;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(1) rotate(45deg);
    transform-origin: 50%;
    transition: transform 0.5s cubic-bezier(0.61, 0.07, 0.23, 0.89);
    z-index: 1;
  }

  &:hover::after {
    transform: translate(-50%, -50%) scale(0) rotate(45deg);
  }

  ${({ theme }) => theme.mq.tablet} {
    scale: 150%;
  }

  ${({ theme }) => theme.mq.desktop} {
    scale: 100%;
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    box-shadow: inset 0 0 0 2px black;
    width: calc(100% + 30px);
  }
`;

export const Wrapper = styled.div<IsOpenPropsType>`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.white};
  align-items: center;
  justify-content: space-between;
  padding: 50px 0 100px;

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.headingMobile};
  }

  ${({ theme }) => theme.mq.desktop} {
    position: static;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: unset;
    background-color: transparent;
    padding: 25px 45px;
  }
`;

export const StyledLogo = styled(Link)<StyledLogoPropsType>`
  width: 100px;
  height: 70px;
  display: initial;
  position: relative;
  background-image: url('${({ imageSource }) => imageSource}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 80%;

  ${({ theme }) => theme.mq.desktop} {
    display: ${({ isMobile }) => (isMobile ? 'none' : 'initial')};
    margin-bottom: 45px;
  }
`;

export const StyledSocialIcon = styled(StyledIcon)`
  display: inline-block;
  margin: 0 20px;
  width: 50px;
  height: 50px;

  svg {
    width: 100%;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 25px;
    height: 25px;
    margin: 0 15px;
  }
`;

export const StyledNavigation = styled.nav<IsOpenPropsType>`
  ul {
    list-style: none;
    padding: 0;
    text-align: center;

    li {
      a {
        margin: 0 auto;
        display: inline-block;
        padding: 25px;
        font-family: ${({ theme }) => theme.font.family.merriweather};
        color: ${({ theme }) => theme.color.black};
        text-decoration: none;
        font-size: ${({ theme }) => theme.font.size.mobileMenu};
      }
    }

    ${({ theme }) => theme.mq.desktop} {
      li {
        a {
          padding: 0;
        }
      }
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-left: auto;
    margin-right: 30px;

    ul {
      display: flex;

      li {
        margin: 0 20px;
      }
    }
  }
`;
