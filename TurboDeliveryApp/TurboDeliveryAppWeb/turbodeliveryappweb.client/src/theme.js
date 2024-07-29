import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2', // Azul oscuro
        },
        secondary: {
            main: '#dc004e', // Rosa oscuro
        },
    },
    typography: {
        fontFamily: 'Roboto, Arial, sans-serif',
    },
    components: {
        
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                },
            },
        },
    },
});

export default theme;
