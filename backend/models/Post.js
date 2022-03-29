const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const postSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: [true , "please fill the title field"],
    },
    title: {
      type: String,
      required: [true , "please fill the title field"],
    },
    message: {
      type: String,
      required: true,
    },
    img: {
      type: String
    },
  },
  {
    timestamps: true,
  }
);
const Post = mongoose.model("Post", postSchema);
module.exports = Post;
