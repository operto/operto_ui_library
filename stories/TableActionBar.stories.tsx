import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { TableActionbar } from "../src/components/TableActionBar/TableActionBar";
import { Typography } from "@mui/material";
import { OpertoTheme } from "../src/Themes";
import { OpertoThemeProvider } from "../src/components/ThemeProvider/OpertoThemeProvider";
//comment ta

export default {
  title: "TableActionbar/Table Action Bar",
  mode: "regular",
  component: TableActionbar,
} as ComponentMeta<typeof TableActionbar>;

const Template: ComponentStory<typeof TableActionbar> = (args) => (
  <OpertoThemeProvider>
    <TableActionbar {...args}></TableActionbar>
  </OpertoThemeProvider>
);

export const Basic = Template.bind({});
Basic.args = {
  isMobile: false,
  startSection: <Typography variant="subtitle1">Current Campaigns</Typography>,
};
