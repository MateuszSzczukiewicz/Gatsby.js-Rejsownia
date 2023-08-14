import styled from 'styled-components';

export const IntroSection = styled.section`
  ${({ theme }) => theme.mq.desktop} {
    text-align: center;
    max-width: 500px;
    margin: 0 auto 40px;
  }
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;

  ${({ theme }) => theme.mq.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }

  ${({ theme }) => theme.mq.huge} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const EmptyState = styled.div`
  margin: 100px auto;
  text-align: center;
  width: 500px;
  padding: 30px;
  background-color: ${({ theme }) => theme.color.darkBlue};

  h2 {
    font-size: 3rem;
    margin: 0;
  }

  h3 {
    margin: 10px 0;
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.montserrat};
  }
`;
