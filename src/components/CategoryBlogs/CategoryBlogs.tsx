import { Box, Card, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import CategorySpecificBlogs from "./CategorySpecificBlogs";
import VerticalCategories from "./VerticalCategories";

const CategoryBlogs = () => {
  const categories: string[] = [
    "Architectue",
    "Beauty",
    "Business",
    "Celebrities",
    "Entertainment",
    "Fashion",
    "Movies",
    "Sports",
    "Technology",
    "USA is the best",
    "War",
  ];
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
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <Grid container>
            <Grid item xs={12}>
              <VerticalCategories category="business" />
            </Grid>
            <Grid item xs={12}>
              <VerticalCategories category="weather" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <h1>Categories</h1>
          <Card variant="outlined">
            <ul>
              {categories.map((cat) => (
                <li
                  key={cat}
                  style={{
                    margin: "30px 0",
                  }}
                >
                  <Link to="/">{cat}</Link>
                </li>
              ))}
            </ul>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CategoryBlogs;
