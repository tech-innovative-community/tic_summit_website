const { getAllPost, singlePost } = require("../controllers/postController");
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const router = require("express").Router();
const Post = require("../models/Post");

router.post("/", upload.single("image"), async (req, res) => {
  try {
    // Upload image to cloudinary
    console.log(req.body);
    const result = await cloudinary.uploader.upload(req.file.path);
    // Create new post
    let post = new Post({
      tit: req.body.tit,
      img: result.secure_url,
      cloudinary_id: result.public_id,
      message: req.body.message,
    });
    // Save post
    await post.save();
    res.json(post);
  } catch (err) {
    console.log(err);
  }
});
router.get("/", getAllPost);
router.get("/:id", singlePost);

module.exports = router;
