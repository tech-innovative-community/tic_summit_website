const {
  getAllPost,
  singlePost,
  Post,
} = require("../controllers/postController");
const router = require("express").Router();

router.post("/", Post);
router.get("/", getAllPost);
router.get("/:id", singlePost);

module.exports = router;
