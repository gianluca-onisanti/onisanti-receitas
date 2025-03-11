import { AppBar, Toolbar, Typography, useTheme } from "@mui/material";
import ThemeToggle from "./ThemeToggle";
import { useStyles, useSwitcher } from "../styles/Styler";

export default function Header() {
  const theme = useTheme();
  const sx = useStyles();

  return (
    <AppBar sx={sx.toolbar} position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Receitas dos Onisanti
        </Typography>
        <ThemeToggle />
      </Toolbar>
    </AppBar>
  );
}
