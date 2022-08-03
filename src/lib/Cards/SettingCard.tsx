// @ts-nocheck

import { Typography } from '@mui/material';
import React from 'react';
import AddCard from './AddCard';

type SettingCardProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
  footerChildren?: React.ReactNode;
};
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

export type { SettingCardProps };
