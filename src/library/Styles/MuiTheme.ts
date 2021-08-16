import { createTheme } from '@material-ui/core/styles';
import { palette, OpertoTheme } from './Theme';

const theme = createTheme({
  palette: {
    primary: {
      main: palette.primary,
    },
    secondary: {
      main: palette.primary,
    },
    error: {
      main: palette.error,
    },
    success: {
      main: palette.success,
    },
    warning: {
      main: palette.warn,
    },
  },
  overrides: {
    MuiInputBase: {
      root: {
        fontSize: '16px',
      },
    },
    MuiCardHeader: {
      content: {
        fontSize: '16px',
      },
    },
    MuiAppBar: {
      colorPrimary: { backgroundColor: OpertoTheme.topBarColor },
      root: {
        boxShadow: 'none',
        borderBottom: `1px solid ${OpertoTheme.borderColor}`,
      },
    },
    MuiDrawer: {
      paper: {
        backgroundColor: OpertoTheme.sideBarColor,
      },
    },
    MuiPaper: {
      rounded: {
        borderRadius: 10,
      },
    },
    MuiTabs: {
      flexContainer: {
        borderBottom: `1px solid ${OpertoTheme.borderColor}`,
      },
    },
    MuiTab: {
      wrapper: {
        textTransform: 'capitalize',
      },
    },
    MuiFormControl: {
      root: { margin: '8px' },
    },
    MuiDataGridCell: {
      '&:focus': {
        outline: 'none',
      },
    },
    MuiGrid: {
      root: {},
    },
    MuiSwitch: {},
    MuiTypography: {
      h2: {
        color: 'rgba(0, 0, 0, 1)',
        marginBottom: '10px',
        fontSize: '24px',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '1.08',
        letterSpacing: '-0.3px',
        textAlign: 'left',
        paddingLeft: '30px',
      },
      h4: {
        fontSize: '28px',
        fontStyle: 'normal',
        fontStretch: 'normal',
        lineHeight: '32px',
        letterSpacing: '-0.3px',
        textAlign: 'left',
      },
    },
    MuiSelect: {
      root: {
        backgroundColor: OpertoTheme.containerAccentBGColor,
      },
    },
    MuiInputLabel: {
      root: {
        backgroundColor: OpertoTheme.containerAccentBGColor,
      },
    },
  },
});

export default theme;
