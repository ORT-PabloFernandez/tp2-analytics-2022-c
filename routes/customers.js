const { response } = require("express");
const express = require("express");
const router = express.Router();
const controller = require("../controllers/customers");

router.get("/", async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;

  res.json(await controller.getAllCustomers(pageSize, page));
});

router.get("/getCustomer/", async (req, res, next) => {
  let emailCustomer = req.query.email;
  res.json(await controller.getCustomerByEmail(emailCustomer));
});

router.get("/getCustomerFourAccounts/", async (req, res, next) => {
  res.json(await controller.getCustomerWithFourAccounts());
});

router.get("/getCustomerWithLimit/", async (req, res, next) => {
  res.json(await controller.getCustomerWithLimit());
});

module.exports = router;
