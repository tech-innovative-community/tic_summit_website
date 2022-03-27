import React, { useContext, useState } from "react";

import PermMediaIcon from "@mui/icons-material/PermMedia";
import { AuthContext } from "../../Context/AuthContext";
import CancelIcon from "@mui/icons-material/Cancel";
import "./postBlog.scss";

const PostBlog = () => {
  const { user } = useContext(AuthContext);
  const data = user.user;

  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { 
      text,
      message,
    };

    console.log(blog);
  };

  return (
    <div className="postBlog">
      <div className="postBlogContainer">
        <div className="topContainer">
          <img src={data.pic} alt="" />
          <p>{data.username}</p>
        </div>

        <form onSubmit={handleSubmit} className="postContainer">
          <input
            type="text"
            onChange={(e) => setText(e.target.value)}
            placeholder="Title"
          />
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
          ></textarea>
          <label htmlFor="file" className="shareOption">
            <PermMediaIcon htmlColor="white" className="shareIcon" />
            <span className="shareOptionText">Photo or Video</span>
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              accept=".png,.jpeg,.jpg"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>
          {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <CancelIcon
              className="shareCancelImg"
              onClick={() => setFile(null)}
            />
          </div>
        )}
          <button type="submit">Post</button>
        </form>
      </div>
    </div>
  );
};

export default PostBlog;
