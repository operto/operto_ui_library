import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { TableActionbar } from "../src/components/TableActionbar/TableActionbar";
import { Typography } from "@mui/material";

export default {
  title: "TableActionbar/Table Action Bar",
  mode: "regular",
  component: TableActionbar,
} as ComponentMeta<typeof TableActionbar>;

const Template: ComponentStory<typeof TableActionbar> = (args) => (
  <ThemeProvider theme={{ ...args }}>
    <TableActionbar {...args}></TableActionbar>
  </ThemeProvider>
);

export const Basic = Template.bind({});
Basic.args = {
  isMobile: false,
  startSection: <Typography variant="subtitle1">Current Campaigns</Typography>,
};
