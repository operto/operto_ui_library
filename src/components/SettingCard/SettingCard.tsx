import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import { AddCard } from '../AddCard';

type SettingCardProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
  footerChildren?: React.ReactNode;
};

export const MainLabel = styled(Typography)`
  && {
    color: ${props =>
      props.theme.mode !== 'light' ? props.theme.textColorWhite : props.theme.textColor};
  }
`;

export const SettingCard: React.FC<SettingCardProps> = props => {
  const { title, subtitle, description, children, footerChildren } = props;

  return (
    <AddCard title={title} footerChildren={footerChildren}>
      {subtitle && (
        <Typography variant='body2' align='left'>
          {subtitle}
        </Typography>
      )}
      {description && (
        <Typography variant='body2' align='left'>
          {description}
        </Typography>
      )}
      {children}
    </AddCard>
  );
};
