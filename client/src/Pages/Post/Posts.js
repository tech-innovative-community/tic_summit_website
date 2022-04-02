import React, { useEffect, useState } from "react";
import "./Posts.scss";
import Skeleton from "../../Components/Skeleton/Skeleton";
import axios from "axios";
import Blog from "../../Components/Blog/Blog";
import { post } from "../../api/endpoints";
import CancelIcon from "@mui/icons-material/Cancel";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState();
  const [pop, setPop] = useState(false);
  useEffect(() => {
    const fetchPost = async () => {
      try {
        await axios.get(post).then((response) => {
          setPosts(
            response.data.sort((p1, p2) => {
              return new Date(p2.createdAt) - new Date(p1.createdAt);
            })
          );
        });
      } catch (error) {
        setIsError(error);
        setTimeout(() => {
          setPop(true);
        }, 3000);
      }
    };
    fetchPost();
  }, []);
  if (isError) {
    return (
      <div className="posts">
        <div className="poster">
          {pop && (
            <div className="popContainer">
              <CancelIcon className="close" onClick={() => setPop(false)} />
              <div className="pop">
                <p>
                  {isError.message + " please check your internet connection"}
                </p>
              </div>
            </div>
          )}
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    );
  } else {
    return (
      <div className="posts">
        {posts ? (
          <div className="poster">
            {posts.map((p) => (
              <Blog key={p._id} posts={p} />
            ))}
          </div>
        ) : (
          <Skeleton />
        )}
      </div>
    );
  }
};

export default Posts;
