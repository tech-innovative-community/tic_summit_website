import React, { useContext, useState } from "react";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import { AuthContext } from "../../Context/AuthContext";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";
import "./postBlog.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { post, toastOptions, uploadUrl } from "../../api/endpoints";

const PostBlog = () => {
  const { user } = useContext(AuthContext);
  const data = user.user;

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const blog = {
      userId: data._id,
      title,
      message,
    };

    if (file) {
      const data = new FormData();
      const fileName =
        Date.now() + "-" + Math.round(Math.random() * 1e9) + file.name;
      data.append("name", fileName);
      data.append("file", file);
      blog.img = fileName;
      console.log(blog.img);
      try {
        await axios.post(uploadUrl, data);
      } catch (err) {}
    }

    try {
      await axios.post(post, blog);
      toast.success("miles morale", toastOptions);
      setInterval(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {}
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
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
          ></textarea>
          <label htmlFor="file" className="shareOption">
            <PermMediaIcon htmlColor="white" className="shareIcon" />
            <span className="shareOptionText">Photo</span>
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
              <img
                className="shareImg"
                src={URL.createObjectURL(file)}
                alt=""
              />
              <CancelIcon
                className="shareCancelImg"
                onClick={() => setFile(null)}
              />
            </div>
          )}
          <button type="submit">Post</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PostBlog;
