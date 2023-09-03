import styled from 'styled-components';
import { Link } from 'gatsby';

interface HeroImageProps {
  imageSource: string;
}

interface WelcomeSectionImageProps {
  imageSource: string;
}

export const Hero = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;

  ${({ theme }) => theme.mq.tablet} {
    height: 40vh;
  }

  ${({ theme }) => theme.mq.desktop} {
    height: 800px;
    justify-content: center;
  }
`;

export const HeroImage = styled.div<HeroImageProps>`
  background-image: url('${({ imageSource }) => imageSource}');
  background-position: 50% 50%;
  background-size: cover;
  width: 90%;
  height: 60%;
  position: absolute;
  z-index: -1;
  top: 15%;
  right: 0;
  opacity: 0.7;

  ${({ theme }) => theme.mq.tablet} {
    width: 70%;
  }

  ${({ theme }) => theme.mq.desktop} {
    top: 0;
    width: 80%;
    height: 75%;
    opacity: 1;
  }
`;

export const HeroHeading = styled.div`
  margin: 20px;

  h1 {
    font-size: ${({ theme }) => theme.font.size.headingMobile};
    margin: 0;
  }

  p {
    display: none;
  }

  ${({ theme }) => theme.mq.desktop} {
    background-color: hsla(0, 100%, 100%, 0.6);
    padding: 20px 30px 20px 50px;
    font-size: ${({ theme }) => theme.font.size.heading};
    max-width: 550px;
    margin: 20vh 10%;

    p {
      display: initial;
    }
  }
`;

export const WelcomeSection = styled.section`
  padding: 0 20px;
  margin-bottom: 100px;

  ${({ theme }) => theme.mq.desktop} {
    width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    margin: 100px 0 200px;
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    margin: 100px 0 100px;
  }
`;

export const WelcomeSectionContent = styled.div`
  background-color: ${({ theme }) => theme.color.darkBlue};
  padding: 30px 20px;
  position: relative;

  h2 {
    margin: 0 0 20px 0;
    font-size: 2.5rem;
    font-weight: 400;
    color: ${({ theme }) => theme.color.white};
  }

  p {
    color: ${({ theme }) => theme.color.white};
    font-size: ${({ theme }) => theme.font.size.paragraph};
  }

  ${({ theme }) => theme.mq.desktop} {
    position: absolute;
    width: 50%;
    top: 100px;
    height: auto;
    padding: 50px;
    right: 20px;

    h2 {
      font-size: ${({ theme }) => theme.font.size.headingSmall};
    }
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    top: 150px;
  }
`;

export const WelcomeSectionImage = styled.div<WelcomeSectionImageProps>`
  margin: 10px auto 100px;
  width: 100%;
  height: 170px;
  position: relative;
  background-image: url('${({ imageSource }) => imageSource}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 80%;

  ${({ theme }) => theme.mq.desktop} {
    z-index: -1;
    top: -80px;
    height: 500px;
    width: 70%;
  }
`;

export const OffersSection = styled.section`
  margin-bottom: 100px;

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledTitle = styled(Link)`
  font-size: ${({ theme }) => theme.font.size.mobileMenu};
  font-weight: bold;
  line-height: 1.2;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};
`;

export const ShowcaseSection = styled.section`
  margin-bottom: 100px;

  h2 {
    font-size: ${({ theme }) => theme.font.size.headingMobile};
    text-align: center;
    margin: 30px 0 10px;
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: column;
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-top: -60px;

    h2 {
      margin: 0 0 30px;
    }

    div:nth-child(2) {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }
`;

export const StyledOffer = styled.div`
  border: 1px solid ${({ theme }) => theme.color.darkBlue};
  background-color: transparent;
  font-size: ${({ theme }) => theme.font.size.button};
  font-family: ${({ theme }) => theme.font.family.montserrat};
  padding: 10px 15px;
  font-weight: 500;
  text-transform: uppercase;
  display: block;
  margin: 8px 15px;
  color: ${({ theme }) => theme.color.black};
`;

export const ShowcaseGallery = styled.div`
  margin: 25px 0 50px;

  ${({ theme }) => theme.mq.desktop} {
    margin: 50px 0 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 25px;
    position: relative;
  }

  img:nth-child(even) {
    margin-right: auto;
  }

  img:nth-child(odd) {
    margin-left: auto;
  }
`;

export const ShowcaseImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  margin: 10px auto;

  ${({ theme }) => theme.mq.bigDesktop} {
    width: 600px;
    height: 300px;
    margin: 0;
  }
`;

export const StyledLinkButton = styled(Link)`
  font-family: ${({ theme }) => theme.font.family.montserrat};
  font-size: ${({ theme }) => theme.font.size.paragraph};
  color: ${({ theme }) => theme.color.darkBlue};
  text-decoration: underline;
  position: relative;
  display: inline-block;
  margin: 5px 0 10px;

  &:hover {
    color: darkblue;
  }

  &::after {
    position: absolute;
    content: '';
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 0 50%;
    width: 20px;
    height: 20px;
    right: -35px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const ServicesSection = styled.section`
  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    max-width: 1225px;
    margin: 0 auto;

    div {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    & > p {
      margin: 0 auto;
      align-self: center;
      max-width: 450px;
    }
  }
`;

export const StyledHeading = styled.div`
  font-size: ${({ theme }) => theme.font.size.headingSmall};
  font-family: ${({ theme }) => theme.font.family.merriweather};
  position: relative;
  display: inline-block;
`;
