import React, { useContext, useState } from 'react'

import { AuthContext } from "../../Context/AuthContext";
import "./postBlog.scss"

const PostBlog = () => {
  const { user } = useContext(AuthContext);
  const data = user.user

  const [text, setText] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
    const blog ={
      text, message
    }

    console.log(blog);
  }

  return (
    <div className='postBlog'>
      <div className="postBlogContainer">
        <div className="topContainer">
          <img src={data.pic} alt="" />
          <p>{data.username}</p>
        </div>

        <form onSubmit={handleSubmit} className="postContainer">
          <input type="text" onChange={(e)=> setText(e.target.value)} placeholder="Title" />
          <textarea onChange={(e)=> setMessage(e.target.value)} placeholder="Message" ></textarea>
          <button type='submit'>Post</button>
        </form>
      </div>
    </div>
  )
}

export default PostBlog