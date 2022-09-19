import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

export const OpertoThemeProvider = ({
  children,
  theme,
}: {
  children: ReactNode;
  theme: {};
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
