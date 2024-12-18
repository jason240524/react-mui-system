declare module '@mui/material/styles' {
    // allow configuration using `createTheme()`
    // interface ThemeOptions {
    interface Theme {
      status?: {
        danger?: string;
      };
    }
  }