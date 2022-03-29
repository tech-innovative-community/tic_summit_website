const { Post, getAllPost } = require("../controllers/postController")

const router = require("express").Router()

router.post("/", Post)
router.get("/", getAllPost)

module.exports = router