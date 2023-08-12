import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import throttle from 'lodash.throttle';
import { StyledHeading } from './HighlightedHeading.styles';

interface HighlightedHeadingProps {
  width?: string;
  level?: string;
  children: React.ReactNode;
  isRight?: boolean;
}

export const HighlightedHeading: React.FC<HighlightedHeadingProps> = ({
  width,
  level = '2',
  children,
  isRight = false,
  ...props
}: HighlightedHeadingProps) => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const [playState, setPlayState] = useState(false);

  const handlePlayStateChange = throttle(() => {
    if (headingRef.current) {
      const { top } = headingRef.current.getBoundingClientRect();
      if (top < 800) {
        setPlayState(true);
      }
    }
  }, 150);

  useEffect(() => {
    document.addEventListener('scroll', handlePlayStateChange);

    return () => {
      document.removeEventListener('scroll', handlePlayStateChange);
    };
  }, []);

  return (
    <StyledHeading
      playState={playState}
      ref={headingRef}
      width={width}
      isRight={isRight}
      as={`h${level}` as keyof JSX.IntrinsicElements}
      {...props}
    >
      {children}
    </StyledHeading>
  );
};

HighlightedHeading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.string,
  isRight: PropTypes.bool,
  width: PropTypes.string,
};
