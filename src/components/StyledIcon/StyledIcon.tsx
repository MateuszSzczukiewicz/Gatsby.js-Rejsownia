import PropTypes from 'prop-types';
import React, { FC } from 'react';
import { StyledIconWrapper } from './StyledIcon.styles';
import { StyledIconPropsType } from '../../types/styledIconProps.type.ts';

export const StyledIcon: FC<StyledIconPropsType> = ({ children, ...props }) => <StyledIconWrapper {...props}>{children}</StyledIconWrapper>;

StyledIcon.propTypes = {
  children: PropTypes.node.isRequired,
};
