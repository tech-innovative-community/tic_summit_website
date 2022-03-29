import React, { useEffect, useState } from "react";
import "./Posts.scss";
import Skeleton from "../../Components/Skeleton/Skeleton";
import axios from "axios";
import Blog from "../../Components/Blog/Blog";
import { post } from "../../api/endpoints";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState();
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(post);
        setPosts(
          res.data.posts.sort((p1, p2) => {
            return new Date(p2.createdAt) - new Date(p1.createdAt);
          })
        );
      } catch (error) {
        setIsError(error);
      }
    };
    fetchPost();
  }, []);
  return (
    <div className="posts">
      {posts || isError ? <Blog posts={posts} /> : <Skeleton />}
    </div>
  );
};

export default Posts;
