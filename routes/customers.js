const { response } = require("express");
const express = require("express");
const router = express.Router();
const controller = require("../controllers/customers");
const accounts = require("../controllers/acountsController");
const transactions = require("../controllers/transactionsCotroller");

router.get("/", async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;

  const email = req.query.email ? req.query.email : null;

  console.log("email : ", email);

  if (email != null) {
    //tomo el user by email
    console.log("busco un user");
    res.json(await controller.getCustommerByEmail(email));
  } else {
    //tomo tdos los users como estaba
    res.json(await controller.getAllCustomers(pageSize, page));
  }
});

//Lo arme dinamico por si algun dia se quiere subir o bajar la cantidad de cuentas:
//{{localHost}}/api/customers/more_accounts/4
router.get("/more_accounts/:count", async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;

  console.log("req.query : ", req.path.split("/").pop());

  const getMoreAcounts = req.path.split("/").pop()
    ? parseInt(req.path.split("/").pop())
    : 0;

  res.json(await controller.moreAccountsThan(getMoreAcounts));
});

//Lo arme dinamico por si algun dia se quiere subir o bajar el limite:
//{{localHost}}/api/customers/acount_limit/
router.get("/acount_limit/", async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;
  const limit = req.query.limit ? parseInt(req.query.limit) : 0;

  const acountResult = await accounts.getAcountByLimit(limit);

  res.json(await controller.getClientsByLimit(acountResult));
});

//el nombre esta dinamico para poder buscar de distintos users
router.get("/transactions_by_name/:name", async (req, res) => {
  const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0;
  const page = req.query.page ? parseInt(req.query.page) : 0;

  const name = req.path.split("/").pop() ? req.path.split("/").pop() : "";
  const nameRemplace = name.replace("%20", " ");

  const customer = await controller.getCustommerByName(nameRemplace);

  if (customer.length > 1) {
    res.status(418).send("Inconsistencia el usuario se encuentra repetido");
  } else {
    if (customer.length == 0) {
      res
        .status(406)
        .send("El Usuario Buscado no se encuentra en nestros registros");
    } else {
      const transac = await transactions.getAllTransactionsByAcounts(
        customer[0].accounts
      );

      res.json(transac);
    }
  }
});

module.exports = router;
