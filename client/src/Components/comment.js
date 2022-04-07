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

// post blog
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

//

//post blog

// router.post("/", async (req, res) => {
//   try {
//     const result = await cloudinary.uploader.upload(req.body.image);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }

//   try {
//     // Upload image to cloudinary

//     const { title, message, image } = req.body;
//     // Create new post
//     if (image === undefined) {
//       try {
//         let post = new Post({
//           title,
//           message,
//         });
//         await post.save();
//         res.status(200).json({
//           message: "Post created successfully",
//           post,
//         });
//       } catch (error) {
//         res.status(500).json({
//           message: "Error occured creating post",
//           error,
//         });
//       }
//     } else {
//       try {
//         let post = new Post({
//           tit: req.body.tit,
//           img: result.secure_url,
//           message: req.body.message,
//           user: req.user.id,
//         });
//         await post.save();
//         res.status(200).json({
//           message: "Post created successfully",
//           post,
//         });
//       } catch (error) {
//         res.status(500).json({
//           message: "Error occured creating post",
//           error,
//         });
//       }
//     }
//   } catch (err) {
//     res.status(500).json({
//       message: "Error occured creating post",
//     });
//   }
// });
