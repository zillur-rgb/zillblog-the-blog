import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

interface buttonType {
  variant: "text" | "contained" | "outlined";
  text: string;
}

export default function Buttons({ variant, text }: buttonType) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant={variant}>{text}</Button>
    </Stack>
  );
}
