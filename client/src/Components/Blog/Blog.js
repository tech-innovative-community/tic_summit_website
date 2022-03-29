import React from "react";
import { PF } from "../../api/endpoints";
import "./Blog.scss";

const Blog = ({ posts }) => {
  return (
    <div className="BlogsContainer">
      {posts.img ? (
        <React.Fragment>
          <img src={PF + posts.img} alt="" />
          <div className="blogCont">
            <p className="date">{new Date(posts.createdAt).toLocaleString()}</p>
            <p className="title">{posts.title}</p>
            <p className="message">{posts.message}</p>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div className="blogCont">
            <p className="title">{posts.title}</p>
            <p className="message">{posts.message}</p>
            <p className="date">
              <span>{new Date(posts.createdAt).toLocaleString()}</span>
            </p>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Blog;
