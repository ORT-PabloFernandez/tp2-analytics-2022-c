const { response } = require("express");
const express = require("express");
const router = express.Router();
const accounts = require("../controllers/accounts");

router.get("/", async (req, res) => {
  res.json(await accounts.getAccounts10k());
});

module.exports = router;
