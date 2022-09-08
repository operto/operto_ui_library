import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { TableActionBar } from "../src/components/TableActionBar/TableActionBar";
import { Typography } from "@mui/material";

export default {
  title: "TableActionBar/Table Action Bar",
  mode: "regular",
  component: TableActionBar,
} as ComponentMeta<typeof TableActionBar>;

const Template: ComponentStory<typeof TableActionBar> = (args) => (
  <ThemeProvider theme={{ ...args }}>
    <TableActionBar {...args}></TableActionBar>
  </ThemeProvider>
);

export const Basic = Template.bind({});
Basic.args = {
  isMobile: false,
  startSection: <Typography variant="subtitle1">Current Campaigns</Typography>,
};
