import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          position: "relative",
          background: "rgb(35,33,33)",
          background: `radial-gradient(circle, rgba(16,15,15,1) 0%, rgba(15,14,14,1) 180%)`,
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: 10,
          transform: "skewX(-3deg)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontFamily: "Manrope",
          textTransform: "none",
          borderWidth: 2,
          borderRadius: 0,
          fontWeight: 600,
          letterSpacing: 0.4,
          ":hover": {
            borderRadius: 0,
            borderWidth: 2,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "none",
          boxShadow: "none",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textTransform: "uppercase",
          textDecoration: "none",
          color: "#efebe5",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
  palette: {
    mode: "dark",
    primary: {
      // main: '#DC8C24',
      main: "#d19119",
    },
    secondary: {
      // main: '#9da5f7',
      main: "#5b6eb5",
    },
    info: {
      main: "#18ecbe",
    },
    error: {
      main: "#f8713f",
    },
    success: {
      main: "#91f574",
    },
    background: {
      default: "rgb(38,37,37)",
      lighter: "rgba(239,235,229,0.8)",
      paper: "#24242b",
    },
    text: {
      primary: "#efebe5",
      secondary: "rgba(239,235,229,0.8)",
      disabled: "rgba(239,235,229,0.55)",
    },
  },
  typography: {
    fontFamily: "Manrope",
    h1: {
      fontFamily: "Manrope",
      fontWeight: 700,
      textTransform: "uppercase",
    },
    h2: {
      fontFamily: "Manrope",
      fontWeight: 700,
      textTransform: "uppercase",
    },
    h3: {
      fontFamily: "Manrope",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: 1,
    },
    h4: {
      fontFamily: "Manrope",
      textTransform: "uppercase",
      letterSpacing: 15,
      fontWeight: 800,
    },
    h5: {
      fontFamily: "Manrope",
      letterSpacing: 7,
      fontWeight: 800,
      textTransform: "uppercase",
    },
    h6: {
      fontFamily: "Manrope",
      letterSpacing: 2,
      fontWeight: 600,
      textTransform: "uppercase",
    },
    subtitle1: {
      fontWeight: 300,
    },
    subtitle2: {
      fontWeight: 300,
    },
    body1: {
      fontWeight: 300,
      letterSpacing: 0.45,
    },
    body2: {
      fontWeight: 300,
      letterSpacing: 0.3,
    },
  },
});
