import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import latestPost from "../../types";

const Center = () => {
  const [allBlogs, setAllBlogs] = useState<latestPost[]>([]);

  useEffect(() => {
    axios.get("data.JSON").then((res) => setAllBlogs(res.data.blogposts));
  }, []);
  return (
    <>
      <Typography variant="h6" color="text.neutral" component="div">
        Popular Posts
      </Typography>
      <Stack>
        {allBlogs.slice(0, 3).map((blog) => (
          <Card sx={{ display: "flex", mt: 2 }}>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={blog.img}
              alt="Live from space album cover"
            />
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="subtitle1">
                  {blog.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  {blog.description?.slice(0, 30)}
                </Typography>
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
              ></Box>
            </Box>
          </Card>
        ))}
      </Stack>
    </>
  );
};

export default Center;
