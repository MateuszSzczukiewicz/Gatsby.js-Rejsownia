import React from 'react';
import { getPageSlug } from 'helpers/getPageSlug';
import { ThumbnailImage, ThumbnailInfo, ThumbnailWrapper } from './Thumbnail.styles';

export const Thumbnail = ({ imageSource = '', data = '', miejsce = '' }) => (
  <ThumbnailWrapper to={getPageSlug(miejsce)}>
    <ThumbnailImage src={imageSource} alt="" />
    <ThumbnailInfo>
      <p>{miejsce}</p>
      <p>{data}</p>
    </ThumbnailInfo>
  </ThumbnailWrapper>
);
