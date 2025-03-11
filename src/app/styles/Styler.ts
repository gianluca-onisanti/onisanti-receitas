import { useTheme } from "@mui/material";

export function useSwitcher(mode: "light" | "dark") {
  const theme = {
    light: {
      palette: {
        mode: "light", // TEMA CLARO
        box: {
          main: "#541f1f",
          text: "#ffe7de",
        },
        primary: {
          main: "#1976d2",
        },
        secondary: {
          main: "#9c27b0",
        },
        background: {
          default: "#ffe7de",
          paper: "#ffffff",
        },
        text: {
          primary: "#212121",
          secondary: "#757575",
        },
      },
    },
    dark: {
      palette: {
        mode: "dark", // TEMA ESCURO
        box: {
          main: "#ffe7de",
          text: "#541f1f",
        },
        primary: {
          main: "#90caf9",
        },
        secondary: {
          main: "#ce93d8",
        },
        background: {
          default: "#541f1f",
          paper: "#424242",
        },
        text: {
          primary: "#ffffff",
          secondary: "#bdbdbd",
        },
      },
    },
  };

  return theme[mode];
}

export function useStyles() {
  const theme = useTheme();

  return {
    toolbar: {
      display: "flex",
      transform: "translateX(50%)",
      width: "50%",
      borderRadius: "25px",
      padding: "0 10px",
      margin: "10px",
      backgroundColor: theme.palette.box.main,
      color: theme.palette.box.text,
    },
  };
}
