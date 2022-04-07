// import React, { useContext, useState } from "react";
// import PermMediaIcon from "@mui/icons-material/PermMedia";
// import { AuthContext } from "../../Context/AuthContext";
// import CancelIcon from "@mui/icons-material/Cancel";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { cloudinary, serverPost, toastOptions } from "../../api/endpoints";

// const PostBlog = () => {
//   const { user } = useContext(AuthContext);
//   const userId = user.user;
//   const [title, setTitle] = useState("");
//   const [message, setMessage] = useState("");
//   const [file, setFile] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     const fileName = file.name;
//     const blog = {
//       fileName,
//       upload_preset: "milesmorales",
//     };
//     try {
//       // formData.append("file", fileName);
//       // formData.append("upload_preset", "tic");
//       // console.log(formData);
//       console.log(blog);

//       fetch(cloudinary, {
//         method: "POST",
//         body: blog,
//       }).then((res) => {
//         console.log(res);
//       });

//       // const fileName = file.name;
//       // console.log(fileName);
//       // data.append("file", fileName);
//       // data.append("upload_preset", "ticsummit");
//       // console.log(data);

//       // const res = await axios.post(cloudinary, data);

//       // const result = res.data;
//       // console.log(result);
//       // const url = result.secure_url;
//     } catch (error) {
//       console.log(error);
//     }

//     // try {

//     // const blog = {
//     //   title,
//     //   message,
//     //   userId: userId._id,
//     // };
//     //   // const data = new FormData();
//     //   const filename = file.name;
//     //   blog.image = filename;
//     //   console.log(blog);
//     //   const res = await axios.post(serverPost, blog);

//     //   if (res.status === 200) {
//     //     toast.success("Post Created Successfully", toastOptions);
//     //     setFile(null);
//     //     setMessage("");
//     //     setTitle("");
//     //   }
//     // } catch (error) {
//     //   console.log(error);
//     //   toast.error("Error occured creating post", toastOptions);
//     // }
//   };

//   return (
//     <div className="postBlog">
//       <div className="postBlogContainer">
//         <div className="topContainer">
//           <img src={userId.pic} alt="" />
//           <p>{userId.username}</p>
//         </div>
//         <div className="postContainer">
//           <input
//             className="form-control"
//             placeholder="Enter title"
//             type="text"
//             name="name"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />
//           <textarea
//             className="form-control"
//             placeholder="Enter message"
//             type="text"
//             name="name"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//           />
//           <label htmlFor="file" className="shareOption">
//             <PermMediaIcon htmlColor="white" className="shareIcon" />
//             <span className="shareOptionText">Photo</span>
//             <input
//               style={{ display: "none" }}
//               type="file"
//               id="file"
//               accept=".png,.jpeg,.jpg"
//               onChange={(e) => setFile(e.target.files[0])}
//             />
//           </label>
//           {file && (
//             <div className="shareImgContainer">
//               <CancelIcon
//                 color="white"
//                 className="shareCancelImg"
//                 onClick={() => setFile(null)}
//               />
//               <img
//                 src={URL.createObjectURL(file)}
//                 alt="preview"
//                 style={{ maxWidth: "100%" }}
//                 className="shareImg"
//               />
//             </div>
//           )}
//           <button className="btn btn-primary" onClick={handleSubmit}>
//             Submit
//           </button>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default PostBlog;

import React, { useState } from "react";
import "./postBlog.scss";
import { cloudinary } from "../../api/endpoints";
import axios from "axios";

const PostBlog = () => {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "srsvrme3");
    await axios.post(cloudinary, formData).then((res) => {
      console.log(res.data.secure_url);
    });
  };
  return (
    <form className="postBlog" onSubmit={handleSubmit}>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit">submit</button>
    </form>
  );
};
export default PostBlog;
