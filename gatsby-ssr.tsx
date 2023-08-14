import React from 'react';
import { ReactElement } from 'react';
import { MainTemplate } from './src/templates/MainTemplate';
import { WrapPageElementBrowserArgs } from 'gatsby';

export const wrapPageElement = ({ element, props }: WrapPageElementBrowserArgs): ReactElement => (
  <MainTemplate {...props}>{element}</MainTemplate>
);
