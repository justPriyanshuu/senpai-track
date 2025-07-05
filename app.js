const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

const animeRoutes = require("./views/routes/anime");

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(3000, () => {
  console.log("Listening on Port");
});
