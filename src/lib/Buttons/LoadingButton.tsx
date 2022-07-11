import * as React from 'react';
import { Button } from '@mui/material';

export interface LoadingButtonProps {}

const LoadingButton = (props: LoadingButtonProps) => (
  <Button variant='contained' color='primary'>
    LoadingButton
  </Button>
);

export default LoadingButton;
