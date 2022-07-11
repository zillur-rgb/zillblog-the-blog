import post from "../../types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Buttons from "../Button/Button";
import { Stack } from "@mui/material";

function CategorySingleBlog({ title, img, description }: post): JSX.Element {
  return (
    <Card sx={{ display: "flex", mb: 4, py: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 140 }}
        image={img}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {title.slice(0, 30)}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Mac Miller
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", alignItems: "center", pl: 2, pb: 2 }}>
          {description?.slice(0, 80)}
        </Box>
        <Stack
          direction="row"
          spacing={4}
          sx={{
            ml: 2,
          }}
        >
          <Buttons variant="outlined" text="Like" />
          <Buttons variant="text" text="Read More" />
        </Stack>
      </Box>
    </Card>
  );
}

export default CategorySingleBlog;
