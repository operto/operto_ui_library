import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import {
  MainLabel,
} from 'lib/SmartCards/StyledSmartCard';

import SettingCard from 'lib/Cards/SettingCard';

export default {
    title: 'Operto/Cards/Setting Card',
    mode: 'regular',
    component: SettingCard,
  
  } as ComponentMeta<typeof SettingCard>;


  const Template: ComponentStory<typeof SettingCard> = (args) => (
    <ThemeProvider theme={{ ...args }}>
        <SettingCard {...args}>
            <MainLabel>Empty Content</MainLabel>
        </SettingCard>
    </ThemeProvider>

  );

  export const Basic = Template.bind({});
Basic.args = {
  title: 'Setting Card',
  description: 'HI'
};

