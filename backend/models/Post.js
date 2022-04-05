const mongoose = require("mongoose");
const postShema = new mongoose.Schema(
  {
    tit: {
      type: String,
    },
    img: {
      type: String,
    },
    cloudinary_id: {
      type: String,
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Posts", postShema);
