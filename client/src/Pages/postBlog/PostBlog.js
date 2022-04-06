import React, { useContext, useState } from "react";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import { AuthContext } from "../../Context/AuthContext";
import CancelIcon from "@mui/icons-material/Cancel";
import axios from "axios";
import "./postBlog.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { post, toastOptions } from "../../api/endpoints";

const PostBlog = () => {
  const { user } = useContext(AuthContext);
  const userId = user.user;
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const handleSubmit = async () => {
    const blog = {
      title,
      message,
      userId: userId._id,
      image: file,
    };
    try {
      let formData = new FormData();
      formData.append("image", blog.image);
      formData.append("tit", blog.title);
      formData.append("message", blog.message);
      const res = await axios.post(post, formData);
      if (res.status === 200) {
        toast.success("Post Created Successfully", toastOptions);
        setFile(null);
        setMessage("");
        setTitle("");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error occured creating post", toastOptions);
    }
  };

  return (
    <div className="postBlog">
      <div className="postBlogContainer">
        <div className="topContainer">
          <img src={userId.pic} alt="" />
          <p>{userId.username}</p>
        </div>
        <div className="postContainer">
          <input
            className="form-control"
            placeholder="Enter title"
            type="text"
            name="name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="form-control"
            placeholder="Enter message"
            type="text"
            name="name"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
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
              <CancelIcon
                color="white"
                className="shareCancelImg"
                onClick={() => setFile(null)}
              />
              <img
                src={URL.createObjectURL(file)}
                alt="preview"
                style={{ maxWidth: "100%" }}
                className="shareImg"
              />
            </div>
          )}
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PostBlog;
