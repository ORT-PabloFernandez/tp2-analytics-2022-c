const express = require("express");
const router = express.Router();
const controller = require("../controllers/customers");

router.get("/", async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;

  res.json(await controller.getAllCustomers(pageSize, page));
});

// router.get("/:id", async (req, res) => {
//   res.json(await controller.getCustomerId(req.params.id));
// });

router.get("/customerEmail/:email", async (req, res) => {
  res.json(await controller.getCustomerEmail(req.params.email));
});

router.get("/customersFourAccounts/size/:size", async (req, res) => {
  const sizeParams = parseInt(req.params.size);
  res.json(await controller.getCustomersFourAccounts(parseInt(sizeParams)));
});

router.get("/customers/account/limit", async (req, res) => {
  res.json(await controller.getCustomersWithAccountLimit());
});

module.exports = router;
