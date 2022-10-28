const express = require("express");
const router = express.Router();
const controller = require("../controllers/customers");

router.get("/", async (req, res) => {
  const name = req.query.name ? req.query.name : "";
  res.json(await controller.getCustomerTransaction(name));
});

module.exports = router;
