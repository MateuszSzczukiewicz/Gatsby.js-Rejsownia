import * as React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import 'assets/styles/normalize.css';

interface MainTemplateProps {
  children: React.ReactNode;
}

export const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </>
);

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
