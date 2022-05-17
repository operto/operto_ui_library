import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FooterContainer } from 'lib/SmartCards/StyledSmartCard';

import LoadingButton from 'lib/Buttons/LoadingButton';

export default {
  title: 'Operto/Button',
  component: FooterContainer,
  argTypes: {
    fill: { control: 'color' },
  },
} as ComponentMeta<typeof FooterContainer>;

const Template: ComponentStory<typeof FooterContainer> = args => (
  <FooterContainer {...args}>footer</FooterContainer>
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  title: 'Smart Card',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  title: 'Smart Card with Footer',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
