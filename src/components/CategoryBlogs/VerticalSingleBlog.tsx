import post from "../../types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Buttons from "../Button/Button";
import { CardActionArea, CardActions } from "@mui/material";

function VerticalSingleBlog({ title, img, description }: post): JSX.Element {
  return (
    <Card sx={{ mr: 4 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Buttons variant="text" text="Share" />
      </CardActions>
    </Card>
  );
}

export default VerticalSingleBlog;
