const { response } = require("express");
const express = require("express");
const router = express.Router();
const controller = require("../controllers/accounts");

router.get("/", async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;

  res.json(await controller.getAllAccounts(pageSize, page));
});

router.get("/limit", async (req, res) => {
  const priceLimit = req.query.priceLimit
    ? parseInt(req.query.priceLimit)
    : 10000;
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;

  res.json(await controller.getAccountsLimit(priceLimit, pageSize, page));
});

module.exports = router;
