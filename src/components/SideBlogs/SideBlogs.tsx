import { Button, Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import latestPost from "../../types";
import SideBlog from "./SideBlog";

const SideBlogs = () => {
  const BlogPosts: latestPost[] = [
    {
      id: 1,
      title: "Travelled Down the road and back again",
      img: "https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description:
        "loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make ",
    },
    {
      id: 2,
      title: "Danced in the morning when the world began!",
      img: "https://images.unsplash.com/photo-1657246546724-4b4bf588fd8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
      description:
        "loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    },
    {
      id: 3,
      title: "Danced in the morning when the world began!",
      img: "https://images.unsplash.com/photo-1657441938952-a8cdc7b59b39?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      description:
        "loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    },
    {
      id: 4,
      title: "Travelled Down the road and back again",
      img: "https://images.unsplash.com/photo-1657412025393-a164872c7a00?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      description:
        "loremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make",
    },
  ];

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      flexWrap="wrap"
      spacing={4}
      sx={{
        m: "80px 10%",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <img src={BlogPosts[0].img} alt={BlogPosts[0].img} width="676px" />
          <h1>{BlogPosts[0].title}</h1>
          <p>{BlogPosts[0].description}</p>
          <Button variant="contained" size="small">
            Read More
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            flexWrap="wrap"
            spacing={1}
          >
            {BlogPosts.map((post) => (
              <SideBlog
                img={post.img}
                title={post.title}
                description={post.description}
              />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default SideBlogs;
