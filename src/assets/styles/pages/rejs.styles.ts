import styled from 'styled-components';
import { ContentWrapper } from 'components/ContentWrapper/ContentWrapper.styles';

export const OfferDetailsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 50px;

  li {
    display: flex;

    p {
      margin: 4px 10px;
    }

    p:first-child {
      font-weight: 700;
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    margin: 0 auto;

    li {
      margin: 30px 0;
    }

    div {
      display: flex;
    }
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  min-height: 260px;
  max-height: 500px;
  object-fit: cover;
`;

export const Gallery = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 50px auto;
`;

export const OfferDescription = styled.div`
  position: relative;
  margin-top: 30px;

  ${({ theme }) => theme.mq.desktop} {
    top: -60px;
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    top: -70px;
  }

  ${({ theme }) => theme.mq.huge} {
    top: -90px;
  }
`;

export const OfferTitle = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    margin-bottom: 30px;
  }
`;

export const StyledContentWrapper = styled(ContentWrapper)`
  display: grid;
  grid-template-columns: 1fr;

  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;

    ${Gallery} {
      grid-row: 1 / 2;
      grid-column: 1 / 3;
    }

    ${OfferTitle} {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
    }

    ${OfferDescription} {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
    }

    ${OfferDetailsList} {
      grid-column: 2 / 3;
      grid-row: 2 / 4;
    }
  }
`;

export const StyledHeading = styled.div`
  font-size: ${({ theme }) => theme.font.size.headingSmall};
  font-family: ${({ theme }) => theme.font.family.merriweather};
  position: relative;
  display: inline-block;
`;
