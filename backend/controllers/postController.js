const Post = require("../models/Post");

module.exports.Post = async (req, res, next) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports.getAllPost = async (req, res, next) =>{
    try {
        const posts = await Post.find()
        return res.json({ status: true, posts})
    } catch (error) {
        next(error)
    }
}