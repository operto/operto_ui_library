import React from 'react';
import { Button, Snackbar } from '@material-ui/core';
import styled from 'styled-components';
import { OpertoTheme } from '../Styles/Theme';
import { Alert as MuiAlert } from '@mui/material';
import styledProps from 'styled-props';

import CloseIcon from '@material-ui/icons/Close';

import { isMobile } from 'react-device-detect';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

export interface ActionSnackbarProps {
  onClose: () => void;
  open: boolean;
  setOpen: (value: boolean) => void;
  severity: string;
  actionButtonText: string;
  snackbarMessage: string;
}
const ActionSnackbar = ({
  onClose,
  open,
  setOpen,
  severity,
  actionButtonText,
  snackbarMessage,
}: ActionSnackbarProps) => {
  const vertical = 'top';
  const horizontal = 'center';
  return (
    <DrawerSnackbar
      open={open}
      isMobile={isMobile}
      anchorOrigin={{ vertical, horizontal }}
      // key={{ vertical, horizontal }}
    >
      <Alert
        severity={severity}
        action={
          <>
            <Button color='inherit' size='small' onClick={onClose}>
              {actionButtonText}
            </Button>
            <CloseButton
              onClick={() => {
                setOpen(false);
              }}
            />
          </>
        }
      >
        {snackbarMessage}
      </Alert>
    </DrawerSnackbar>
  );
};

const DrawerSnackbar = styled(Snackbar)<{ isMobile: boolean }>`
  && {
    width: ${props => (props.isMobile ? '100%' : '75%')};

    .MuiSnackbarContent-root {
      background-color: ${styledProps(OpertoTheme.palette)};
      width: 100%;
    }
  }
`;

const CloseButton = styled(CloseIcon)`
  && {
    cursor: pointer;
  }
`;

export default ActionSnackbar;
