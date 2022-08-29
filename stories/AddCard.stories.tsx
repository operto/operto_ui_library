import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import { AddCard } from '../src/components/AddCard/AddCard';

export default {
    title: 'Cards/AddCard',
    mode: 'regular',
    component: AddCard,

  } as ComponentMeta<typeof AddCard>;


  const Template: ComponentStory<typeof AddCard> = (args) => (
    <ThemeProvider theme={{ ...args }}>
        <AddCard {...args}>
            Empty Card
        </AddCard>
    </ThemeProvider>

  );

  export const Basic = Template.bind({});
Basic.args = {
  title: 'Add Card',
};