const Post = require("../models/Post");
module.exports.Post = async (req, res, next) => {
  const newPost = new Post(req.body);
  console.log(newPost);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports.getAllPost = async (req, res, next) => {
  try {
    const posts = await Post.find();
    return res.json(posts);
  } catch (error) {
    next(error);
  }
};
module.exports.singlePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.json(post);
  } catch (error) {
    next(error);
  }
};
