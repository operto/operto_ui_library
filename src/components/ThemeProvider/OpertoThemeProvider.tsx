import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { OpertoTheme } from "../../Themes/Theme";

export const OpertoThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={OpertoTheme}>{children}</ThemeProvider>;
};
