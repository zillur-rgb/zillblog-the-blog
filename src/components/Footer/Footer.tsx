import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import Buttons from "../Button/Button";
import { Grid, Stack } from "@mui/material";
import Left from "./Left";
import Center from "./Center";
import Right from "./Right";

export default function Footer() {
  return (
    <Stack
      sx={{
        backgroundColor: "#eceff1",
        mt: 4,
        px: "10%",
      }}
    >
      <Grid container spacing={6}>
        <Grid
          item
          xs={4}
          sx={{
            my: 4,
          }}
        >
          <Left />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            my: 4,
          }}
        >
          <Center />
        </Grid>
        <Grid
          item
          xs={4}
          sx={{
            my: 4,
          }}
        >
          <Right />
        </Grid>
      </Grid>
    </Stack>
  );
}
