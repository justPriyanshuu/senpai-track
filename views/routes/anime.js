const express = require("express");
const axios = require("axios");
const router = express.router();

router.get("/", async (req, res) => {
  try {
    let url = `https://api.jikan.moe/v4/top/anime?filter=airing`;
    const result = await axios.get(url);
    const anime = result.data.data.slice(0, 8);
    res.render("home", { anime });
  } catch (e) {
    res.send("Error");
  }
});

module.exports = router;
