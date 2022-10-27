const { response } = require("express");
const express = require("express");
const router = express.Router();
const controller = require("../controllers/customers");

router.get("/", async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;

  res.json(await controller.getAllCustomers(pageSize, page));
});

router.get("/customerById/:idCostumer", async (req, res) => {
  res.json(await controller.getCustomerById(req.params.idCostumer));
});

router.get("/accounts", async (req, res) => {
  res.json(await controller.getCostumerByAccounts());
});

router.get("/accountsByLimit", async (req, res) => {
  res.json(await controller.getCustomersAccounts());
});
module.exports = router;
