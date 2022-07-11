import * as React from 'react';

import styled from 'styled-components';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Typography } from '@mui/material';

export interface AdderCardProps {
  noPaddingContent?: boolean;
  title?: React.ReactNode;
  action?: React.ReactNode;
  children?: any;
  onNextClick?: Function;
  onPreviousClick?: Function;
  onSaveClick?: Function;
  footerChildren?: any;
  showFooter?: boolean;
  bodyHeight?: number;
  headerChildren?: React.Component | Element;
  dimmed?: boolean;
}

const AddCard = ({
  noPaddingContent,
  action,
  title,
  onNextClick,
  onPreviousClick,
  onSaveClick,
  children,
  showFooter: footer,
  footerChildren,
  bodyHeight,
  headerChildren,
  dimmed,
}: AdderCardProps) => (
  <CardContainer>
    <>
      {headerChildren && headerChildren}
      {title && (
        <HeaderContainer
          title={<Typography variant='subtitle1'>{title}</Typography>}
          action={action}
        />
      )}

      <BodyContainer
        $dimmed={dimmed}
        $noPaddingContent={noPaddingContent}
        $bodyHeight={bodyHeight as number}
      >
        {children}
      </BodyContainer>
      {footer && (
        <FooterContainer $dimmed={dimmed}>
          {onPreviousClick && (
            // @ts-ignore
            <Button onClick={onPreviousClick} variant='contained' color='primary'>
              Previous
            </Button>
          )}
          {onNextClick && (
            // @ts-ignore
            <Button onClick={onNextClick} variant='contained' color='primary'>
              Next
            </Button>
          )}
          {onSaveClick && (
            // @ts-ignore
            <Button onClick={onSaveClick} variant='contained' color='primary'>
              Save
            </Button>
          )}
        </FooterContainer>
      )}
      {footerChildren && <FooterContainer>{footerChildren}</FooterContainer>}
    </>
  </CardContainer>
);

const CardContainer = styled(Card)`
  && {
    width: 100%;
    border-radius: 10px;
    border: 0.5px solid #d4d4d4;
    margin-bottom: 20px;
  }
`;

export const HeaderContainer = styled(CardHeader)`
  && {
    text-align: start;
    border-bottom: 0.5px solid #d4d4d4;

    div[class*='MuiCardHeader-action'] {
      margin: auto;
    }
  }
`;

const FooterContainer = styled(CardActions)<{ $dimmed?: boolean }>`
  && {
    border-top: 0.5px solid #d4d4d4;
    padding: 12px 18px;
    opacity: ${props => (props.$dimmed ? 0.3 : 1)};
    display: flex;
    justify-content: end;
  }
`;

const BodyContainer = styled(CardContent)<{
  $bodyHeight?: number;
  $noPaddingContent?: boolean;
  $dimmed?: boolean;
}>`
  && {
    padding: ${props => (props.$noPaddingContent ? '0px' : '24px')} !important;
    border-radius: none !important;
    font-size: 14px;
    min-height: ${props => props.$bodyHeight && `${props.$bodyHeight}px`};
    opacity: ${props => (props.$dimmed ? 0.3 : 1)};
  }
`;

export default AddCard;
