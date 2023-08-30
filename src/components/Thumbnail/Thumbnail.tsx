import React from 'react';
import PropTypes from 'prop-types';
import { getPageSlug } from 'helpers/getPageSlug';
import { ThumbnailImage, ThumbnailInfo, ThumbnailWrapper } from './Thumbnail.styles';

export const Thumbnail = ({ imageSource = '', place = '', date = '' }) => {
  const tag: string = `${place} ${date}`;
  return (
    <ThumbnailWrapper to={getPageSlug(tag)}>
      <ThumbnailImage src={imageSource} alt="" />
      <ThumbnailInfo>
        <p>{place}</p>
        <p>{date}</p>
      </ThumbnailInfo>
    </ThumbnailWrapper>
  );
};

Thumbnail.propTypes = {
  imageSource: PropTypes.string,
  place: PropTypes.string,
  date: PropTypes.string,
};
