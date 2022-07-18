// @ts-nocheck

import * as React from 'react';
import styled from 'styled-components';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import { isMobile } from 'react-device-detect';

export interface SmartCardProps {
  /**
   * Main Label of the smart card
   */
  title?: string;
  /**
   * Color of the smart card
   */
  fill?: string;
  /**
   * Regular mode will use white text color and light mode will use the default text color
   */
  mode?: string;
  /**
   * Accepts a MUI Menu with an IconButton
   */
  menu?: React.Component;
  children?: React.Component | Elements;
  footer?: React.Component;
  settingsView?: React.Component;
  open?: boolean;
  removeGutter?: boolean;
  isCard: boolean;
  isMainActivity: boolean;
}

export const SmartCardComponent = ({
  title,
  children,
  menu,
  settingsView,
  footer,
  removeGutter,
  open = false,
  isCard,
  isMainActivity,
}: SmartCardProps) => (
  <MainContainer
    isMobile={isMobile}
    isCard={isCard}
    isMainActivity={isMainActivity}
    square={isMobile && isMainActivity && true}
  >
    {settingsView && <SettingsContainer open={open}>{settingsView}</SettingsContainer>}
    <ContentContainer>
      <SmartCardContainer>
        {(!isMobile || isMainActivity) && (
          <>
            <HeaderContainer hasMenu={Boolean(menu)}>
              <Title variant='subtitle1'>{title}</Title>
              {menu}
            </HeaderContainer>
            <Divider />
          </>
        )}
        <BodyContainer removeGutter={removeGutter}>{children}</BodyContainer>

        {footer && (
          <>
            <Divider />
            <FooterContainer>{footer}</FooterContainer>
          </>
        )}
      </SmartCardContainer>
    </ContentContainer>
  </MainContainer>
);

const SettingsContainer = styled(Paper)`
  && {
    position: absolute;
    top: 0;
    width: 90%;
    z-index: 10;
    height: 100%;
    left: ${props => (props.open ? '10%' : '100%')};
    background-color: white;
    transition: all 500ms cubic-bezier(1, 0, 0, 1);
    overflow-y: scroll;
  }
`;

const Title = styled(Typography)`
  && {
    color: ${props =>
      props.theme.mode !== 'light' ? props.theme.textColorWhite : props.theme.textColors};
    text-align: left;
    line-height: 1;
  }
`;

const HeaderContainer = styled.div`
  padding: ${props => (props.hasMenu ? '14px 10px 14px 18px' : '18px 18px 14px 18px')};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BodyContainer = styled.div`
  padding: ${props => (props.removeGutter ? '0px' : '0px 24px 24px 24px')};
`;

const FooterContainer = styled.div`
  padding: 0px 24px 0px 24px;
`;

const SmartCardContainer = styled(Paper)`
  && {
    color: ${props =>
      props.theme.mode !== 'light' ? props.theme.textColorWhite : props.theme.textColors};
    background-color: ${props => props.theme.fill || props.theme.containerBGColor};
    height: 100%;
  }
`;

const ContentContainer = styled.div`
  width: 100%;
`;

const MainContainer = styled(Paper)<{
  isMobile: boolean;
  isCard: boolean;
  isMainActivity: boolean;
}>`
  && {
    width: ${props => (props.isMobile && props.isCard ? '300px' : '100%')};
    margin-right: ${props => props.isMobile && props.isCard && '12px'};
    &:nth-child(1) {
      ${props => props.isMobile && props.isCard && 'margin-left: 12px'};
    }
    box-shadow: ${props => props.isMobile && props.isMainActivity && 'none'};
    position: relative;
    /* min-width: 250px; */
    overflow-x: hidden;
    overflow-y: hidden;
  }
`;

export type { SmartCardProps };