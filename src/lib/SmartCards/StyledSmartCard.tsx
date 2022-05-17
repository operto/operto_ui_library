import * as React from 'react';
import styled from 'styled-components';

import { Typography, Button, IconButton, ListItem, ListItemIcon } from '@material-ui/core';

// export const FooterContainer = props => {
//   return <FooterContainerComponent>{props.children}</FooterContainerComponent>;
// };

export const FooterContainer = styled.div<{ justify: string }>`
  display: flex;
  justify-content: ${props => (props.justify ? props.justify : 'flex-end')};
  color: ${props => (props.theme.fill ? props.theme.textColorWhite : props.theme.textColor)};
  align-items: center;
  height: 100%;
`;

export const MainLabel = styled(Typography)`
  && {
    color: ${props =>
      props.theme.mode !== 'light' ? props.theme.textColorWhite : props.theme.textColor};
  }
`;

export const SmartCardIconButton = styled(IconButton)`
  && {
    color: ${props =>
      props.theme.fill && props.theme.mode !== 'light'
        ? props.theme.textColorWhite
        : props.theme.textColor};
  }
`;

export const SmartCardButton = styled(Button)`
  && {
    color: ${props =>
      props.theme.fill && props.theme.mode !== 'light'
        ? props.theme.textColorWhite
        : props.theme.textColor};
  }
`;
