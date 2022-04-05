// import "./blog.css"
// import BlogCenter from "../blogCenter/BlogCenter"
// import { useState, useEffect } from 'react'
// import axios from 'axios'
// // import { CircularProgress } from "@material-ui/core"
// import Skeleton from "../Skeleton/Skeleton"

// const Blog = () => {
//     const [posts, setPosts] = useState([])
//     const [isError, setIsError] = useState()
//     useEffect(() =>{
//         const fetchPost = async () =>{
//             try {
//                 const res = await axios.get('https://mevick-moon.herokuapp.com/api/posts')
//                 setPosts(
//                     res.data.sort((p1, p2) => {
//                         return new Date(p2.createdAt) - new Date(p1.createdAt);
//                     }))
//             } catch (error) {
//                 console.log(error);
//                 setIsError(error)
//                 console.log("miels");
//             }
//         }
//         fetchPost()
//     }, [])

//     // point break
//     // console.log(posts)

//     return (
//         <div className={isError ? "blogError" : "blog" }>
//             {isError ?
//                 <div className="error">
//                     <Skeleton />
//                     {/* <CircularProgress size="70px" color="white" /> */}
//                 </div>
//                 :
//                 <div className="blogContainer">
//                 <BlogCenter posts={posts} />
//                 </div>
//             }
//         </div>
//     )
// }

// export default Blog

/// miles morales postblog

// import React, { useContext, useState } from "react";
// import PermMediaIcon from "@mui/icons-material/PermMedia";
// import { AuthContext } from "../../Context/AuthContext";
// import CancelIcon from "@mui/icons-material/Cancel";
// import axios from "axios";
// import "./postBlog.scss";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { post, toastOptions, uploadUrl } from "../../api/endpoints";

// const PostBlog = () => {
//   const { user } = useContext(AuthContext);
//   const data = user.user;

//   const [title, setTitle] = useState("");
//   const [message, setMessage] = useState("");
//   const [file, setFile] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const blog = {
//       userId: data._id,
//       title,
//       message,
//     };

//     if (file) {
//       const data = new FormData();
//       const fileName =
//         Date.now() + "-" + Math.round(Math.random() * 1e9) + file.name;
//       data.append("name", fileName);
//       data.append("file", file);
//       blog.img = fileName;
//       console.log(blog.img);
//       try {
//         await axios.post(uploadUrl, data);
//       } catch (err) {}
//     }

//     try {
//       await axios.post(post, blog);
//       toast.success("miles morale", toastOptions);
//       setInterval(() => {
//         window.location.reload();
//       }, 1000);
//     } catch (error) {}
//   };

//   return (
//     <div className="postBlog">
//       <div className="postBlogContainer">
//         <div className="topContainer">
//           <img src={data.pic} alt="" />
//           <p>{data.username}</p>
//         </div>

//         <form onSubmit={handleSubmit} className="postContainer">
//           <input
//             type="text"
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Title"
//           />
//           <textarea
//             onChange={(e) => setMessage(e.target.value)}
//             placeholder="Message"
//           ></textarea>
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
//               <img
//                 className="shareImg"
//                 src={URL.createObjectURL(file)}
//                 alt=""
//               />
//               <CancelIcon
//                 className="shareCancelImg"
//                 onClick={() => setFile(null)}
//               />
//             </div>
//           )}
//           <button type="submit">Post</button>
//         </form>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default PostBlog;
