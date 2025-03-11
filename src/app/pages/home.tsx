// src/app/pages/home.tsx
"use client";
import { Typography, Button, Container, useTheme } from "@mui/material";

export default function HomePage() {
  const theme = useTheme();

  return (
    <Container>
      <Typography
        color={theme.palette.box.main}
        variant="h4"
        component="h1"
        gutterBottom
      >
        Bem-vindo à página inicial com MUI!
      </Typography>
      <Button variant="contained" color="primary">
        Clique Aqui
      </Button>
    </Container>
  );
}
