import styled from 'styled-components';

export const IntroSection = styled.section`
  ${({ theme }) => theme.mq.desktop} {
    text-align: center;
    max-width: 500px;
    margin: 0 auto 40px;
  }
`;

export const StyledHeading = styled.div`
  font-size: ${({ theme }) => theme.font.size.headingSmall};
  font-family: ${({ theme }) => theme.font.family.merriweather};
  position: relative;
  display: inline-block;
`;
