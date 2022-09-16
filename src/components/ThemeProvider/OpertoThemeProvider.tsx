import React from "react";
import { ThemeProvider } from "styled-components";
import { OpertoTheme } from "../../Themes/Theme";

export const OpertoThemeProvider = () => {
  return <ThemeProvider theme={OpertoTheme}></ThemeProvider>;
};
