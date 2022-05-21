const express = require("express");
const router = express.Router();

const getTitanicResults = require("../controllers/titanic.controllers");

router.post("/titanic", getTitanicResults);

module.exports = router;
