const { response } = require("express");
const express = require("express");
const router = express.Router();
const controller = require("../controllers/customers");

router.get("/", async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;

  res.json(await controller.getAllCustomers(pageSize, page));
});

router.get("/email", async (req, res) => {
  const userEmail = req.query.userEmail;
  res.json(await controller.getCustomerEmail(userEmail));
});

router.get("/four-accounts", async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;

  res.json(await controller.getCustomersFourAccounts(pageSize, page));
});

router.get("/list-limit", async (req, res) => {
  const priceLimit = req.query.priceLimit
    ? parseInt(req.query.priceLimit)
    : 10000;
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;
  res.json(await controller.getCustomersWithLimit(priceLimit, pageSize, page));
});

module.exports = router;
