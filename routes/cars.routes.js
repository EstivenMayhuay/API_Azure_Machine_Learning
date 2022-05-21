const express = require("express");
const router = express.Router();

const getCarsResult = require("../controllers/cars.controllers");

router.post("/cars", getCarsResult);

module.exports = router;
