import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { OpertoTheme } from 'library/Styles/Theme';
import MuiTheme from 'library/Styles/MuiTheme';

export const decorators = [
  Story => (
    <MuiThemeProvider theme={MuiTheme}>
      <ThemeProvider theme={OpertoTheme}>
        <Story />
      </ThemeProvider>
    </MuiThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
