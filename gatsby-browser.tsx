import * as React from 'react';
import { WrapPageElementBrowserArgs } from 'gatsby';
import { MainTemplate } from './src/templates/MainTemplate';

export const wrapPageElement = ({ element, props }: WrapPageElementBrowserArgs) => (
  <MainTemplate {...props}>{element}</MainTemplate>
);
