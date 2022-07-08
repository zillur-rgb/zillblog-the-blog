import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import latestPost from "../../types";

const LatestBar = () => {
  const latestPosts: latestPost[] = [
    {
      id: 1,
      title: "Travelled Down the road and back again",
      img: "https://images.unsplash.com/photo-1503457574462-bd27054394c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      title: "Danced in the morning when the world began!",
      img: "https://images.unsplash.com/photo-1657246546724-4b4bf588fd8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    },
    {
      id: 3,
      title: "Danced in the morning when the world began!",
      img: "https://images.unsplash.com/photo-1657246546724-4b4bf588fd8a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    },
  ];
  return (
    <Box
      sx={{
        m: "0 10%",
      }}
    >
      <Stack direction="row" spacing={4}>
        <p
          style={{
            padding: "15px 20px",
            backgroundColor: "#f22613",
            color: "#fff",
            fontWeight: "700",
          }}
        >
          Latest Posts
        </p>
        {latestPosts.map((latest) => (
          <div
            key={latest.id}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={latest.img}
              alt={latest.img}
              width="50px"
              height="50px"
              style={{
                borderRadius: "200px",
                marginRight: "15px",
              }}
            />
            <p>{latest.title}</p>
          </div>
        ))}
      </Stack>
    </Box>
  );
};

export default LatestBar;
