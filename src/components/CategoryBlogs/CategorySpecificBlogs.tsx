import axios from "axios";
import React, { useEffect, useState } from "react";
import latestPost from "../../types";
import CategorySingleBlog from "./CategorySingleBlog";
type categoryType = {
  category: string;
};

const CategorySpecificBlogs = ({ category }: categoryType) => {
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
  console.log(allBlogs);
  console.log(category);

  return (
    <div>
      <h1>{category.toUpperCase()}</h1>
      {allBlogs?.map((blog) => (
        <CategorySingleBlog
          key={blog.id}
          title={blog.title}
          img={blog.img}
          description={blog.description}
        />
      ))}
    </div>
  );
};

export default CategorySpecificBlogs;
