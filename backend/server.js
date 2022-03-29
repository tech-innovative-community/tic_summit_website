require("dotenv").config({
  path: "./config/config.env",
});
const express = require("express");
const cors = require("cors");
const app = express();
const connectDb = require("./config/db");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");

const PORT = process.env.PORT || 5000;
connectDb();
app.use(cors());

app.use(morgan("dev"));
app.use(express.json());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    cb(null, req.body.name);
  },
});
const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.json({
      status: true,
      msg: "File uploded successfully",
    });
  } catch (error) {
    console.error(error);
  }
});

app.get("/", (req, res) => {
  res.send("the ticsummit backend and made with love by zenith noble");
});

app.use("/images/", express.static(path.join(__dirname, "public/images")));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/post", require("./routes/post"));

app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
