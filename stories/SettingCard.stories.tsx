import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { MainLabel, SettingCard } from '../src/components/SettingCard/SettingCard';

export default {
  title: 'Cards/Setting Card',
  mode: 'regular',
  component: SettingCard,
} as ComponentMeta<typeof SettingCard>;

const Template: ComponentStory<typeof SettingCard> = args => (
  <ThemeProvider theme={{ ...args }}>
    <SettingCard {...args}>
      <MainLabel>Empty Content</MainLabel>
    </SettingCard>
  </ThemeProvider>
);

export const Basic = Template.bind({});
Basic.args = {
  title: 'Setting Card',
};