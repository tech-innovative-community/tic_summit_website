import React, { useState } from "react";
import "./postBlog.scss";
import PermMediaIcon from "@mui/icons-material/PermMedia";
import {
  cloudinary,
  post,
  serverPost,
  toastOptions,
} from "../../api/endpoints";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const PostBlog = () => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (file) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "srsvrme3");
        await axios.post(cloudinary, formData).then((res) => {
          setImage(res.data.secure_url);
        });
        const blog = {
          title,
          image,
          message,
        };

        await axios.post(serverPost, blog).then((res) => {
          console.log(res);
        });
        toast.success("Blog created succesfull", toastOptions);
        setTitle("");
        setMessage("");
        setFile(null);
      } else {
        const blog = {
          title,
          message,
        };
        await axios.post(serverPost, blog).then((res) => {
          console.log(res);
        });
        toast.success("Blog created succesfull", toastOptions);
        setTitle("");
        setMessage("");
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <form className="postBlog" onSubmit={handleSubmit}>
      <div className="blogContainer">
        <input
          type="text"
          value={title}
          placeholder="Enter title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Enter message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <label htmlFor="file" className="shareOption">
          <input
            type="file"
            style={{ display: "none" }}
            id="file"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <PermMediaIcon htmlColor="white" className="" />
          <span className="shareOptionText">Photo</span>
        </label>
        {file && (
          <div className="blogImg">
            <CloseIcon onClick={() => setFile(null)} />
            <img
              src={URL.createObjectURL(file)}
              alt="preview"
              style={{ maxWidth: "100%" }}
            />
          </div>
        )}

        <button type="submit">submit</button>
      </div>
      <ToastContainer />
    </form>
  );
};
export default PostBlog;
