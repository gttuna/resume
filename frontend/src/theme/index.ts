import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#6750A4',
    },
    secondary: {
      main: '#00BFA5',
    },
    background: {
      default: '#0B0D17',
      paper: '#111421',
    },
    text: {
      primary: '#F7F9FC',
      secondary: 'rgba(247, 249, 252, 0.72)',
    },
  },
  typography: {
    fontFamily: '"Roboto Flex Variable", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      letterSpacing: '-0.04em',
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 500,
    },
    body1: {
      lineHeight: 1.7,
    },
  },
  shape: {
    borderRadius: 18,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 999,
          textTransform: 'none',
          fontWeight: 600,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          fontWeight: 600,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

