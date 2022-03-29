import React from "react";
import "./Blog.scss";

const Blog = ({ posts }) => {
  console.log(posts);
  return (
    <div className="BlogsContainer">
      <div className="blogsCont">
        <p>{posts.title}</p>
      </div>
    </div>
  );
};

export default Blog;
