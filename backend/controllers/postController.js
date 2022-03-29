const Post = require("../models/Post");

module.exports.Post = async (req, res, next) => {
  try {
    const { userId, title, message } = req.body;
    const post = await Post.create({
      userId,
      title,
      message,
    });
    delete user.password;
    return res.json({ status: true, post, msg: "Post created succesfully" });
  } catch (ex) {
    next(ex);
  }
};

module.exports.getAllPost = async (req, res, next) =>{
    try {
        const posts = await Post.find()
        return res.json({ status: true, posts})
    } catch (error) {
        next(error)
    }
}