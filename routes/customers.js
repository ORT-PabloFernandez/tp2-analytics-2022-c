const { response } = require("express");
const express = require("express");
const router = express.Router();
const controller = require("../controllers/customers");

router.get("/", async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;

  res.json(await controller.getAllCustomers(pageSize, page));
});

router.get("/:email", async (req, res) => {
  const customer = await controller.getSingleCustomer(req.params.email);
  res.send({ customer });
});

router.get("/many/accounts", async (req, res) => {
  res.json(await controller.getCustomersWithFourAccounts());
});

router.get("/users/many/accounts", async (req, res) => {
  res.json(await controller.getAllCustomersWithLimitedAccounts());
});
module.exports = router;
