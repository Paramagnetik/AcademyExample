import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#00b894' },
    background: { default: '#f5f7fb' },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default theme;
