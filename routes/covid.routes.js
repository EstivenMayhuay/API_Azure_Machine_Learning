const express = require("express");
const router = express.Router();

const getCovidResult = require("../controllers/covid.controllers");

router.post("/covid", getCovidResult);

module.exports = router;
