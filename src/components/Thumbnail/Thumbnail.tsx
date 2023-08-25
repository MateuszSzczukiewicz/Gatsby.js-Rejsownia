import React from 'react';
import { getPageSlug } from 'helpers/getPageSlug';
import { ThumbnailImage, ThumbnailInfo, ThumbnailWrapper } from './Thumbnail.styles';

export const Thumbnail = ({ imageSource = '', data = '', miejsce = '' }) => {
  const tag: string = `${miejsce} ${data}`;
  return (
    <ThumbnailWrapper to={getPageSlug(tag)}>
      <ThumbnailImage src={imageSource} alt="" />
      <ThumbnailInfo>
        <p>{miejsce}</p>
        <p>{data}</p>
      </ThumbnailInfo>
    </ThumbnailWrapper>
  );
};
