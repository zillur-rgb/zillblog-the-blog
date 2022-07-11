import { Stack, Typography } from "@mui/material";
import { BsFacebook } from "react-icons/bs";
import { FaCentercode } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Left = () => {
  return (
    <>
      <Stack>
        <Typography variant="h6" color="text.neutral" component="div">
          About Us
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
          corrupti excepturi vero architecto iure voluptates neque iste quidem
          tempora animi obcaecati veritatis illum quaerat qui, sunt, ratione
          veniam sit vel. Nam quos impedit possimus eius!
        </Typography>
      </Stack>

      <Stack>
        <Typography variant="h6" color="text.neutral" component="div">
          Stay in Touch
        </Typography>
        <Stack direction="row" spacing={2}>
          <BsFacebook
            style={{
              color: "#f22613",
              fontSize: "32px",
              cursor: "pointer",
            }}
          />
          <FaCentercode
            style={{
              color: "#f22613",
              fontSize: "32px",
              cursor: "pointer",
            }}
          />
          <AiFillInstagram
            style={{
              color: "#f22613",
              fontSize: "32px",
              cursor: "pointer",
            }}
          />
          <FaLinkedin
            style={{
              color: "#f22613",
              fontSize: "32px",
              cursor: "pointer",
            }}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default Left;
