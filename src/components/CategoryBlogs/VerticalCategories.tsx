import { Stack } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import latestPost from "../../types";
import VerticalSingleBlog from "./VerticalSingleBlog";

type categoryType = {
  category: string;
};

const VerticalCategories = ({ category }: categoryType) => {
  const [allBlogs, setAllBlogs] = useState<latestPost[]>([]);

  useEffect(() => {
    axios
      .get("data.JSON")
      .then((res) =>
        setAllBlogs(
          res.data.blogposts.filter(
            (blog: { category: string }) => blog.category === category
          )
        )
      );
  }, []);
  return (
    <div>
      <h1>{category.toUpperCase()}</h1>
      <Stack direction="row">
        {allBlogs?.map((blog) => (
          <VerticalSingleBlog
            key={blog.id}
            title={blog.title}
            img={blog.img}
            description={blog.description}
          />
        ))}
      </Stack>
    </div>
  );
};

export default VerticalCategories;
