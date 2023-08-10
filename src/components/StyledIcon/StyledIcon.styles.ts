import styled from 'styled-components';

interface StyledIconProps {
  isDark?: boolean;
}

export const StyledIconWrapper = styled.span<StyledIconProps>`
  display: inline-block;

  svg {
    width: 100%;
    height: auto;
  }

  svg path {
    fill: ${({ isDark }) => (isDark ? '#000' : '#fff')};
  }
`;
