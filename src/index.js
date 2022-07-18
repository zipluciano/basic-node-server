require("dotenv").config();
const path = require("path");
const PORT = process.env.NODE_PORT || 3030;
const express = require("express");
const app = express();

app.use(express.static("public"));
app.use("css", express.static(__dirname + "public/css"));
app.use("js", express.static(__dirname + "public/js"));
app.use("img", express.static(__dirname + "public/img"));

const viewsPath = path.join(__dirname.replace("src", ""), "views");

app.get("/", (req, res) => {
  res.sendFile(path.join(viewsPath, "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(viewsPath, "about.html"));
});

app.listen(PORT, () => console.log("Server running on port:", PORT));
