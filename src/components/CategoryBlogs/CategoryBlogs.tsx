import { Box, Divider, Grid, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CategorySpecificBlogs from "./CategorySpecificBlogs";

const CategoryBlogs = () => {
  return (
    <Box
      sx={{
        m: "0 10%",
      }}
    >
      <Grid container spacing={4}>
        <Grid item xs={6}>
          <CategorySpecificBlogs category="entertainment" />
        </Grid>
        <Grid item xs={6}>
          <CategorySpecificBlogs category="sports" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CategoryBlogs;
