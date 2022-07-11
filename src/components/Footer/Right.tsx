import { Stack, TextField, Typography } from "@mui/material";
import Buttons from "../Button/Button";

const Right = () => {
  return (
    <Stack>
      <Typography variant="h6" color="text.neutral" component="div">
        Subscribe our newsletter
      </Typography>
      <Typography variant="body2" color="text.neutral" component="div">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id sunt ex qui
        laborum perspiciatis placeat? Ratione, mollitia. Temporibus dicta
        quaerat iusto sapiente, voluptate ratione, vero culpa fugiat eveniet
        repudiandae distinctio?
      </Typography>
      <Stack direction="row">
        <TextField
          id="filled-textarea"
          label="Multiline Placeholder"
          placeholder="Placeholder"
          multiline
          variant="filled"
        />
        <Buttons variant="contained" text="Subscribe" />
      </Stack>
    </Stack>
  );
};

export default Right;
