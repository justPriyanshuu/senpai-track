const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    let url = `https://api.jikan.moe/v4/top/anime`;
    const result = await axios.get(url);
    const animes = result.data.data.slice(0, 8);
    res.render("home", { animes });
  } catch (e) {
    res.send("Error");
  }
});

module.exports = router;
