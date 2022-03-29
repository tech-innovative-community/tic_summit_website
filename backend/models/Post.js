const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      unique: true,
    },
    message: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
const Post = mongoose.model("Post", postSchema);
module.exports = Post;
