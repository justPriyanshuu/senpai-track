const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("home");
});

const animeRoute = require(".views/routes/anime");
app.use("/", animeRoute);

app.listen(3000, () => {
  console.log("Listening on Port");
});
