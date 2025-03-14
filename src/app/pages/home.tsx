"use client";

import {
  Button,
  Container,
  useTheme,
  Grid2,
  Box,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useStyles } from "../styles/Styler";
import { Cake, DinnerDining } from "@mui/icons-material";
import { useState } from "react";

export default function HomePage() {
  const [hover, setHover] = useState(false);
  const theme = useTheme();
  const sx = useStyles();

  const handleHover = (e: any) => {
    setHover(!hover);
  };

  return (
    <Container>
      <Grid2 mt={4} container spacing={{ xs: 1, md: 6 }} alignItems={"center"}>
        {/* Para estudo: 
          XS = ExtraSmall (Mobile); 
          MD = Medium (Telas P e Tablets); 
          LG = Large (PCs e TVs); 
        */}
        <Grid2
          sx={{ textAlign: { xs: "center", md: "end", lg: "end" } }}
          size={{ xs: 12, md: 6, lg: 6 }}
        >
          <Image
            priority
            alt="Logo"
            src={"/images/logo.png"}
            width={250}
            height={250}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            style={{
              marginTop: "40px",
              marginBottom: "40px",
              filter: `drop-shadow(0 2px 4px ${theme.palette.logo.shadow})`,
              transition: "all 0.3s ease-in-out",
              transform: hover ? "scale(1.2)" : "scale(1.0)",
            }}
          />
        </Grid2>
        <Grid2
          sx={{ textAlign: { xs: "center", md: "start", lg: "start" } }}
          size={{ xs: 12, md: 6, lg: 6 }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <div>
              <Button variant="contained" sx={sx.button.primary}>
                <Typography>{"Salgados"}</Typography>
                <DinnerDining fontSize="large" />
              </Button>
            </div>
            <div>
              <Button variant="contained" sx={sx.button.primary}>
                <Typography>{"Doces"}</Typography>
                <Cake fontSize="large" />
              </Button>
            </div>
          </Box>
        </Grid2>
      </Grid2>
    </Container>
  );
}
