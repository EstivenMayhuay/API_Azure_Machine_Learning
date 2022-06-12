const express = require("express");
const router = express.Router();

const {
  getCovidResult,
  getPeruProvincias,
  getPeruDistritos,
} = require("../controllers/covid.controllers");

router.get("/peru/departamento/:departamento", getPeruProvincias);
router.post("/peru/provincia/:provincia", getPeruDistritos);
router.post("/covid", getCovidResult);

module.exports = router;
