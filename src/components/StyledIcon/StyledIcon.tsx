import PropTypes from 'prop-types';
import React, { ReactNode } from 'react';
import { StyledIconWrapper } from './StyledIcon.styles';

interface StyledIconProps {
  children: ReactNode;
}

export const StyledIcon: React.FC<StyledIconProps> = ({ children, ...props }) => (
  <StyledIconWrapper {...props}>{children}</StyledIconWrapper>
);

StyledIcon.propTypes = {
  children: PropTypes.node.isRequired,
};
