// @ts-nocheck

import React, { Props } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { OpertoTheme } from 'lib/Styles/Theme';
import {
  MainLabel,
  FooterContainer,
  SmartCardButton,
  SmartCardIconButton,
} from 'lib/Snackbars/ActionSnackBar';
import HelpIcon from '@material-ui/icons/Help';
import styled from 'styled-components';

import ActionSnackBar from 'lib/Snackbars/ActionSnackBar';

export default {
  title: 'Operto/Snack Bars/Action Snack Bar',
  mode: 'regular',
  component: ActionSnackBar,

  argTypes: {
    fill: { control: 'color', defaultValue: OpertoTheme.palette.primary },
    mode: {
      control: 'radio',
      options: ['regular', 'light'],
      defaultValue: OpertoTheme.textColorWhite,
    },
  },
} as ComponentMeta<typeof SmartCard>;

const Template: ComponentStory<typeof SmartCard> = (args: Props) => (
  <ThemeProvider theme={{ ...args }}>
    <SmartCardContainer>
      <SmartCard {...args}>
        <SmartCardEmptyContent>
          <MainLabel>Empty Content</MainLabel>
        </SmartCardEmptyContent>
      </SmartCard>
    </SmartCardContainer>
  </ThemeProvider>
);

export const Basic = Template.bind({});
Basic.args = {
  title: 'Basic Smart Card',
};

export const WithFooter = Template.bind({});
WithFooter.args = {
  title: 'Smart Card with Footer',
  footer: (
    <FooterContainer justify='space-between'>
      <SmartCardButton>View Access</SmartCardButton>
      <SmartCardIconButton>
        <HelpIcon />
      </SmartCardIconButton>
    </FooterContainer>
  ),
};

const SmartCardContainer = styled.div`
  width: 320px;
  margin: 0 auto;
`;
const SmartCardEmptyContent = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center; ;
`;
