import { Stack, Typography } from "@mui/material";
import React from "react";

const LastFooter = () => {
  return (
    <Stack
      alignItems="center"
      sx={{
        backgroundColor: "#000",
        color: "#fff",
        py: 2,
      }}
    >
      <Typography variant="body2">
        &copy;2022 and made with &lt;3 by MD Zillur Rahman
      </Typography>
    </Stack>
  );
};

export default LastFooter;
