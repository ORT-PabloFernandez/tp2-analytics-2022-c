const express = require("express");
const router = express.Router();
const controller = require("../controllers/customers");

router.get("/", async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;

  res.json(await controller.getAllCustomers(pageSize, page));
});

router.get("/accounts/:acccount_id", async (req, res) => {
  res.json(await controller.getCusterAccount(req.params.acccount_id));
});

router.get("/accountsLimit10000", async (req, res) => {
  res.json(await controller.getAllCustomersAccountLimit10000());
});

router.get("/:id", async (req, res) => {
  res.json(await controller.getCustomer(req.params.id));
});

// Ruta para buscar un cliente por correo electrónico
router.get("/email/:email", async (req, res) => {
  res.json(await controller.getCustomerByEmail(req.params.email));
});

router.get("/accountsmin/:acc", async (req, res) => {
  res.json(await controller.getAllCustomersWminAccounts(req.params.acc));
});

router.get("/name/:name", async (req, res) => {
  res.json(await controller.getCustomersByName(req.params.name));
});



module.exports = router;
