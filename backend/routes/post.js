const { getAllPost, singlePost } = require("../controllers/postController");
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const router = require("express").Router();
const Post = require("../models/Post");

router.post("/", async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.body.image);
    console.log(result);
  } catch (error) {
    console.log(error);
  }

  try {
    // Upload image to cloudinary

    const { title, message, image } = req.body;
    // Create new post
    if (image === undefined) {
      try {
        let post = new Post({
          title,
          message,
        });
        await post.save();
        res.status(200).json({
          message: "Post created successfully",
          post,
        });
      } catch (error) {
        res.status(500).json({
          message: "Error occured creating post",
          error,
        });
      }
    } else {
      try {
        let post = new Post({
          tit: req.body.tit,
          img: result.secure_url,
          message: req.body.message,
          user: req.user.id,
        });
        await post.save();
        res.status(200).json({
          message: "Post created successfully",
          post,
        });
      } catch (error) {
        res.status(500).json({
          message: "Error occured creating post",
          error,
        });
      }
    }
  } catch (err) {
    res.status(500).json({
      message: "Error occured creating post",
    });
  }
});
router.get("/", getAllPost);
router.get("/:id", singlePost);

module.exports = router;
