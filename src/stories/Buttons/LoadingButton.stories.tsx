import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoadingButton from 'lib/Buttons/LoadingButton';

export default {
  title: 'Operto/Button',
  component: LoadingButton,
  // argTypes: {
  //   fill: { control: 'color' },
  // },
} as ComponentMeta<typeof LoadingButton>;

const Template: ComponentStory<typeof LoadingButton> = args => (
  <LoadingButton {...args}>Button</LoadingButton>
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  title: 'Primary Button',
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
