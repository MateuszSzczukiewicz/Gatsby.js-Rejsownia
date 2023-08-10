import React, { ReactNode } from 'react';
import PropTypes from 'prop-types';
import { StyledIconWrapper } from './StyledIcon.styles';

interface StyledIconProps {
  children: ReactNode;
}

const StyledIcon: React.FC<StyledIconProps> = ({ children, ...props }) => (
  <StyledIconWrapper {...props}>{children}</StyledIconWrapper>
);

StyledIcon.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StyledIcon;
