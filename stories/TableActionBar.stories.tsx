import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { TableActionBar } from "../src/components/TableActionBar/TableActionBar";

export default {
  title: "TableActionBar/Table Action Bar",
  mode: "regular",
  component: TableActionBar,
} as ComponentMeta<typeof TableActionBar>;

const Template: ComponentStory<typeof TableActionBar> = (args) => (
  <TableActionBar
    startSection={header}
    endSection={
      !isMobile && (
        <>
          <SearchField
            size="small"
            onChange={handleSearch}
            value={searchValue}
          />
        </>
      )
    }
    fullWidth
  />
);

export const Basic = Template.bind({});
Basic.args = {
  title: "Setting Card",
};
