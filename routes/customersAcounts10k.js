const { response } = require("express");
const express = require("express");
const router = express.Router();
const controller = require("../controllers/customers");

router.get("/", async (req, res) => {
  res.json(await controller.getCustomersAcounts10k());
});

module.exports = router;
