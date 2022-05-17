import React, { Props } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { OpertoTheme } from 'lib/Styles/Theme';
import {
  MainLabel,
  FooterContainer,
  SmartCardButton,
  SmartCardIconButton,
} from 'lib/SmartCards/StyledSmartCard';
import HelpIcon from '@material-ui/icons/Help';
import styled from 'styled-components';

import SmartCard from 'lib/SmartCards/SmartCard';

export default {
  title: 'Operto/Smart Cards/Basic Card',
  mode: 'regular',
  component: SmartCard,

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
