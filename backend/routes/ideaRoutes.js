const express = require("express");
const router = express.Router();
const { getIdea, getHomeIdeas, getCategoryAll } = require("../controllers/ideaController");

router.get("/home", getHomeIdeas);
router.get("/:category/all", getCategoryAll);
router.get("/:category", getIdea);

module.exports = router;